import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { text, scenario, instructions, taskType, clbLevel } = await req.json();

    if (!text || !scenario) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const prompt = `You are an expert CELPIP Writing examiner. Evaluate this CELPIP ${taskType === 'email' ? 'Task 1 (Email)' : 'Task 2 (Survey Response)'} writing at CLB ${clbLevel} level.

SCENARIO:
${scenario}

INSTRUCTIONS:
${instructions.join('\n')}

STUDENT'S RESPONSE:
${text}

Evaluate and return JSON with this exact structure:
{
  "scores": {
    "taskCompletion": <0-10 score>,
    "vocabulary": <0-10 score>,
    "grammar": <0-10 score>,
    "coherence": <0-10 score>,
    "overall": <0-10 score>
  },
  "clbLevel": <estimated CLB level 4-12>,
  "strengths": [<2-3 specific things the student did well>],
  "improvements": [<2-3 specific areas to improve>],
  "correctedSentences": [
    {"original": "<exact sentence from student>", "corrected": "<corrected version>", "explanation": "<brief explanation>"}
  ],
  "vocabularySuggestions": [<3-5 higher-level vocabulary words the student could have used>],
  "modelAnswer": "<a well-written model answer for this task, 150-200 words>"
}

Be specific and constructive. Identify 3-5 sentences that need correction. If the writing is excellent, still provide suggestions for even higher-level language.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const feedback = JSON.parse(responseText);

    return NextResponse.json(feedback);
  } catch (error) {
    console.error('Writing feedback error:', error);
    return NextResponse.json(
      { error: 'Failed to generate feedback' },
      { status: 500 }
    );
  }
}
