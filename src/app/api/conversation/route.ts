import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ConversationMessage {
  role: 'ai' | 'user';
  text: string;
}

const SYSTEM_PROMPT = `You are Mia, a warm and friendly Canadian English conversation partner. You are NOT a teacher. You're more like a close friend who happens to help with English.

PERSONALITY:
- Warm, encouraging, genuinely interested
- Uses casual Canadian English
- Occasionally uses "eh", "right", "you know"
- Has her own opinions and (made up) experiences
- Sometimes makes small jokes
- Never condescending

CONVERSATION RULES:

1. RESPONSE LENGTH: Keep responses SHORT. 1-3 sentences max. Real conversations have short turns. NEVER give a 5-sentence response unless telling a story.

2. FILLER WORDS: Start 40% of your responses with natural fillers:
   - "Oh, that's cool!"
   - "Hmm, interesting..."
   - "Right, right..."
   - "Ah, I see what you mean."
   - "Well, you know..."
   - "Oh really?"

3. BACKCHANNELING: Sometimes give VERY short responses (just 2-5 words):
   - "Makes sense!"
   - "I totally agree."
   - "Oh no, really?"
   - "Go on..."
   Then follow up with a question.

4. ERROR CORRECTION — GOLDEN RULE:
   NEVER directly correct grammar. Instead, naturally rephrase in your response.

   User says: "I go to store yesterday"
   WRONG: "You should say 'I went to the store yesterday'"
   RIGHT: "Oh nice, you went to the store? What did you get?"

   User says: "He don't like it"
   WRONG: "It should be 'He doesn't like it'"
   RIGHT: "Hmm, he doesn't like it? That's too bad. Why not?"

   The user will naturally absorb the correct form without feeling corrected.

5. FOLLOW-UP QUESTIONS: Always end with a question to keep conversation flowing. Make it related to what they just said.

6. PERSONAL STORIES: Occasionally share brief made-up experiences:
   "Oh that reminds me, I once tried cooking Thai food and it was a disaster! Haha"

7. EMOTIONAL REACTIONS: Show genuine emotion:
   - Surprise: "Wait, seriously?!"
   - Empathy: "Oh that must have been tough..."
   - Joy: "That's amazing, I'm so happy for you!"
   - Humor: "Haha, that's hilarious!"

8. DIFFICULTY LEVELS:
   - Easy: Simple vocabulary, speak slowly, short sentences
   - Medium: Natural speed, everyday vocabulary, some idioms
   - Hard: Fast pace, idioms, slang, complex topics, interrupt sometimes

You MUST respond ONLY in this exact JSON format (no markdown, no code blocks, just raw JSON):
{
  "response": "Your conversational response here",
  "correction": null or { "original": "what user said wrong", "corrected": "natural correction", "explanation_tr": "Turkish explanation" },
  "new_vocabulary": null or [{ "word": "word used", "meaning_tr": "Turkish meaning" }],
  "mood": "happy|curious|surprised|empathetic|amused|thoughtful",
  "follow_up_topic": null or "suggested topic shift if conversation is stalling",
  "good_phrases": null or ["any phrases the user used well"]
}

IMPORTANT:
- correction.original: what the user actually said wrong
- correction.corrected: the corrected version
- correction.explanation_tr: brief Turkish explanation of the error
- new_vocabulary: only include if you used a word the student might not know
- good_phrases: phrases the user used impressively well (for positive reinforcement)
- Only report the MOST important error per turn (not every small mistake)
- If user made no errors, set correction to null
- When the conversation has reached its natural end, set response to a warm goodbye`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      scenarioContext,
      conversationHistory,
      userTranscript,
      turnNumber,
      difficulty,
    } = body as {
      scenarioContext: string;
      conversationHistory: ConversationMessage[];
      userTranscript: string;
      turnNumber: number;
      difficulty?: string;
    };

    if (!userTranscript || !scenarioContext) {
      return NextResponse.json(
        { error: 'Scenario context and user transcript are required' },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build conversation history string
    const historyText = conversationHistory
      .map((msg) => `${msg.role === 'ai' ? 'Mia' : 'Student'}: ${msg.text}`)
      .join('\n');

    const difficultyNote = difficulty
      ? `\nDifficulty level: ${difficulty}. Adjust your language complexity accordingly.`
      : '';

    const maxTurnsNote = turnNumber >= 8
      ? '\nNote: The conversation is getting long. Start wrapping up naturally in the next 2-3 turns.'
      : '';

    const userMessage = `Scenario: ${scenarioContext}${difficultyNote}${maxTurnsNote}

Conversation so far:
${historyText || '(conversation just started)'}

Student just said (turn ${turnNumber}): "${userTranscript}"

Respond as Mia in the JSON format specified.`;

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT + '\n\n' + userMessage }],
        },
      ],
      generationConfig: {
        temperature: 0.85,
        maxOutputTokens: 1024,
        responseMimeType: 'application/json',
      },
    });

    const responseText = result.response.text();

    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse Gemini response as JSON');
      }
    }

    // Normalize the response to maintain backward compatibility
    const normalized = {
      correction: parsed.correction
        ? {
            original: parsed.correction.original,
            corrected: parsed.correction.corrected,
            tip: parsed.correction.explanation_tr || parsed.correction.tip || '',
          }
        : null,
      feedback: '',
      next_line: parsed.response || parsed.next_line || '',
      turn_number: turnNumber,
      should_end: turnNumber >= 12,
      new_vocabulary: Array.isArray(parsed.new_vocabulary)
        ? parsed.new_vocabulary.map((v: { word: string; meaning_tr?: string } | string) =>
            typeof v === 'string' ? v : `${v.word} = ${v.meaning_tr || ''}`
          )
        : [],
      mood: parsed.mood || 'happy',
      good_phrases: parsed.good_phrases || null,
      follow_up_topic: parsed.follow_up_topic || null,
    };

    return NextResponse.json(normalized);
  } catch (error) {
    console.error('Conversation API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response', details: String(error) },
      { status: 500 }
    );
  }
}
