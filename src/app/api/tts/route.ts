import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';

// Valid voice names for Google Cloud TTS
const VALID_VOICES: Record<string, { name: string; ssmlGender: string }> = {
  'en-US-Neural2-C': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'en-US-Neural2-D': { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'en-US-Studio-O': { name: 'en-US-Studio-O', ssmlGender: 'FEMALE' },
  'en-US-Studio-Q': { name: 'en-US-Studio-Q', ssmlGender: 'MALE' },
};

const DEFAULT_VOICE = 'en-US-Neural2-C';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'TTS API key not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { text, voice, speed } = body as {
      text?: string;
      voice?: string;
      speed?: number;
    };

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Limit text length to prevent abuse
    if (text.length > 5000) {
      return NextResponse.json(
        { error: 'Text too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    const voiceConfig = VALID_VOICES[voice ?? ''] ?? VALID_VOICES[DEFAULT_VOICE];
    const speakingRate = Math.min(Math.max(speed ?? 1.0, 0.5), 2.0);

    const ttsResponse = await fetch(`${GOOGLE_TTS_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text: text.trim() },
        voice: {
          languageCode: 'en-US',
          name: voiceConfig.name,
          ssmlGender: voiceConfig.ssmlGender,
        },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate,
          pitch: 0,
          volumeGainDb: 0,
        },
      }),
    });

    if (!ttsResponse.ok) {
      const errorData = await ttsResponse.json().catch(() => null);
      console.error('Google TTS API error:', errorData);
      return NextResponse.json(
        { error: 'TTS synthesis failed' },
        { status: 502 }
      );
    }

    const data = await ttsResponse.json();
    const audioContent = data.audioContent as string;

    if (!audioContent) {
      return NextResponse.json(
        { error: 'No audio content returned' },
        { status: 502 }
      );
    }

    // Decode base64 to binary
    const audioBuffer = Buffer.from(audioContent, 'base64');

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('TTS route error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
