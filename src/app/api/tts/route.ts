import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const ELEVENLABS_VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah — warm female

// Map voice names to Google Cloud TTS voices
const VOICE_MAP: Record<string, { name: string; ssmlGender: string }> = {
  'nova':    { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'shimmer': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'alloy':   { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'onyx':    { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'echo':    { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'fable':   { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'female':  { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'male':    { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'en-US-Neural2-C': { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' },
  'en-US-Neural2-D': { name: 'en-US-Neural2-D', ssmlGender: 'MALE' },
  'en-US-Studio-O':  { name: 'en-US-Studio-O', ssmlGender: 'FEMALE' },
  'en-US-Studio-Q':  { name: 'en-US-Studio-Q', ssmlGender: 'MALE' },
};

const DEFAULT_VOICE = { name: 'en-US-Neural2-C', ssmlGender: 'FEMALE' };

// ---- ElevenLabs Pro TTS ----
async function synthesizeElevenLabs(text: string, apiKey: string): Promise<Response> {
  const resp = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
        },
      }),
    }
  );

  if (!resp.ok) {
    throw new Error(`ElevenLabs API ${resp.status}`);
  }

  const audioBuffer = Buffer.from(await resp.arrayBuffer());

  return new Response(audioBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length.toString(),
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

// ---- Google Cloud TTS (standard) ----
async function synthesizeGoogle(text: string, voice: string | undefined, speed: number): Promise<Response> {
  const apiKey = process.env.GOOGLE_TTS_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'TTS API key not configured' }, { status: 500 });
  }

  const voiceConfig = VOICE_MAP[voice ?? ''] ?? DEFAULT_VOICE;
  const speakingRate = Math.min(Math.max(speed, 0.5), 2.0);

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
    if (ttsResponse.status === 429) {
      return NextResponse.json(
        { error: 'Rate limited, try again later' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
    return NextResponse.json({ error: 'TTS synthesis failed' }, { status: 502 });
  }

  const data = await ttsResponse.json();
  const audioContent = data.audioContent as string;

  if (!audioContent) {
    return NextResponse.json({ error: 'No audio content returned' }, { status: 502 });
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
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, voice, speed, engine } = body as {
      text?: string;
      voice?: string;
      speed?: number;
      engine?: 'standard' | 'pro';
    };

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    if (text.length > 5000) {
      return NextResponse.json({ error: 'Text too long (max 5000 characters)' }, { status: 400 });
    }

    // Pro engine: ElevenLabs
    const elevenlabsKey = process.env.ELEVENLABS_API_KEY;
    if (engine === 'pro' && elevenlabsKey) {
      try {
        return await synthesizeElevenLabs(text.trim(), elevenlabsKey);
      } catch {
        // Fall through to Google TTS
      }
    }

    // Standard engine: Google Cloud TTS
    return await synthesizeGoogle(text.trim(), voice, speed ?? 1.0);
  } catch (err) {
    console.error('TTS route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
