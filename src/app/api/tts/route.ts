import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';

// Map OpenAI-style voice names to Google Cloud TTS voices
const VOICE_MAP: Record<string, { name: string; ssmlGender: string }> = {
  'nova':    { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'shimmer': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'alloy':   { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'onyx':    { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'echo':    { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'fable':   { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  // Generic gender names
  'female': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'male':   { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  // Legacy Google voice names (backwards compat)
  'en-US-Neural2-C': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'en-US-Neural2-D': { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'en-US-Studio-O':  { name: 'en-US-Studio-O', ssmlGender: 'FEMALE' },
  'en-US-Studio-Q':  { name: 'en-US-Studio-Q', ssmlGender: 'MALE' },
};

const DEFAULT_VOICE = { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' };

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_TTS_API_KEY || process.env.GEMINI_API_KEY;
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

    if (text.length > 5000) {
      return NextResponse.json(
        { error: 'Text too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    const voiceConfig = VOICE_MAP[voice ?? ''] ?? DEFAULT_VOICE;
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
      console.error('Google TTS API error:', ttsResponse.status, errorData);

      // Rate limited — tell client to back off
      if (ttsResponse.status === 429) {
        return NextResponse.json(
          { error: 'Rate limited, try again later' },
          {
            status: 429,
            headers: { 'Retry-After': '60' },
          }
        );
      }

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
