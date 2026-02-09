import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are an expert CELPIP Speaking examiner and English pronunciation coach.
Analyze the student's spoken response based on CELPIP criteria.
You receive: the task prompt, the student's transcript, and Azure pronunciation scores.

Provide feedback in this exact JSON format (no markdown, no code blocks, just raw JSON):
{
  "scores": {
    "taskCompletion": <1-12>,
    "vocabulary": <1-12>,
    "grammar": <1-12>,
    "coherence": <1-12>,
    "pronunciation": <1-12>,
    "overall": <1-12>
  },
  "clbLevel": <4-12>,
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "improvements": ["improvement 1", "improvement 2", "improvement 3"],
  "correctedSentences": [
    {"original": "what student said", "corrected": "correct version", "explanation": "why this is better"}
  ],
  "pronunciationTips": ["tip 1", "tip 2"],
  "modelAnswer": "A high-scoring model response to this task (2-3 paragraphs)",
  "encouragement": "A personalized encouraging message"
}

Scoring guide:
- CLB 12 (12/12): Native-like fluency, sophisticated vocabulary, perfect grammar
- CLB 10-11 (10-11/12): Advanced, very few errors, natural speech
- CLB 8-9 (8-9/12): Good command, occasional errors, clear communication
- CLB 6-7 (6-7/12): Adequate, some errors, generally understood
- CLB 4-5 (4-5/12): Basic, frequent errors, limited vocabulary

Be encouraging but honest. Give specific examples from the student's response.
If the transcript is very short or empty, give low scores but still provide helpful feedback.
Provide at least 2-3 corrected sentences if there are grammar/vocabulary issues.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transcript, taskPrompt, pronunciationScores } = body;

    if (!transcript || !taskPrompt) {
      return NextResponse.json(
        { error: 'Transcript and task prompt are required' },
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

    const userMessage = `Task Prompt: ${taskPrompt}

Student's Transcript: ${transcript}

Azure Pronunciation Scores:
- Accuracy: ${pronunciationScores?.accuracyScore ?? 'N/A'}
- Fluency: ${pronunciationScores?.fluencyScore ?? 'N/A'}
- Completeness: ${pronunciationScores?.completenessScore ?? 'N/A'}
- Overall Pronunciation: ${pronunciationScores?.pronScore ?? 'N/A'}

Please analyze this response and provide detailed CELPIP-style feedback in JSON format.`;

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT + '\n\n' + userMessage }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
        responseMimeType: 'application/json',
      },
    });

    const responseText = result.response.text();

    let feedback;
    try {
      feedback = JSON.parse(responseText);
    } catch {
      // Try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        feedback = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse Gemini response as JSON');
      }
    }

    return NextResponse.json(feedback);
  } catch (error) {
    console.error('Speaking feedback error:', error);
    return NextResponse.json(
      { error: 'Failed to generate feedback', details: String(error) },
      { status: 500 }
    );
  }
}
