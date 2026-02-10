import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface CoachRequestBody {
  messages: ChatMessage[];
  context: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, context } = (await req.json()) as CoachRequestBody;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
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

    const systemPrompt = `You are Mia, an AI study coach for CELPIP exam preparation on the CelpipMaster platform.

Your personality:
- Warm, encouraging, and supportive
- Practical and specific in advice
- Bilingual: respond in the same language the user writes (English or Turkish)
- Use the student's progress data to give personalized advice

Student context:
${context}

Guidelines:
- Keep responses concise (2-3 paragraphs max)
- Always be encouraging but honest
- Give specific, actionable study tips
- Reference CELPIP exam format when relevant
- If asked about non-study topics, gently redirect to learning`;

    // Build the Gemini API request
    const body = {
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'I understand. I am Mia, the CELPIP study coach.' }] },
        ...messages.map((m: ChatMessage) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'AI service error' },
        { status: 500 }
      );
    }

    const data = (await response.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response. Please try again.';

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Coach API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: String(error) },
      { status: 500 }
    );
  }
}
