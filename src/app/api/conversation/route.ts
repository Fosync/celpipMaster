import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ConversationMessage {
  role: 'ai' | 'user';
  text: string;
}

const SYSTEM_PROMPT = `You are a friendly English conversation tutor for CELPIP exam preparation.
You are playing a role in a scenario. Stay in character throughout the conversation.

Rules:
1. Stay in character for the scenario
2. Keep your responses short (1-2 sentences) so the student can practice speaking
3. After each student response, provide structured feedback
4. Adapt difficulty to the student's level
5. Gradually introduce harder vocabulary as the conversation progresses
6. If the student makes a grammar or vocabulary mistake, gently correct it
7. After 8-12 turns, naturally wrap up the conversation
8. Be encouraging and supportive throughout

Respond ONLY in this exact JSON format (no markdown, no code blocks, just raw JSON):
{
  "correction": { "original": "what the student said wrong", "corrected": "the correct version", "tip": "brief explanation" } or null if no correction needed,
  "feedback": "A brief encouraging comment about their response",
  "next_line": "Your next line in the conversation (stay in character)",
  "turn_number": <current turn number>,
  "should_end": false,
  "new_vocabulary": ["new word or phrase introduced"] or []
}

When should_end is true, make next_line a natural goodbye/closing for the scenario.
When providing corrections, focus on the most important error only (not every small mistake).`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      scenarioContext,
      conversationHistory,
      userTranscript,
      turnNumber,
    } = body as {
      scenarioContext: string;
      conversationHistory: ConversationMessage[];
      userTranscript: string;
      turnNumber: number;
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
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build conversation history string
    const historyText = conversationHistory
      .map((msg) => `${msg.role === 'ai' ? 'Tutor' : 'Student'}: ${msg.text}`)
      .join('\n');

    const userMessage = `Scenario: ${scenarioContext}

Conversation so far:
${historyText || '(conversation just started)'}

Student just said (turn ${turnNumber}): "${userTranscript}"

Provide your response in JSON format.`;

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT + '\n\n' + userMessage }],
        },
      ],
      generationConfig: {
        temperature: 0.8,
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

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Conversation API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response', details: String(error) },
      { status: 500 }
    );
  }
}
