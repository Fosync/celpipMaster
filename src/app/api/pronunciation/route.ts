import { NextRequest, NextResponse } from 'next/server';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File | null;
    const referenceText = formData.get('referenceText') as string | null;

    if (!audioFile || !referenceText) {
      return NextResponse.json(
        { error: 'Audio file and reference text are required' },
        { status: 400 }
      );
    }

    const speechKey = process.env.AZURE_SPEECH_KEY;
    const speechRegion = process.env.AZURE_SPEECH_REGION;

    if (!speechKey || !speechRegion) {
      return NextResponse.json(
        { error: 'Azure Speech credentials not configured' },
        { status: 500 }
      );
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const audioData = new Uint8Array(arrayBuffer);

    const speechConfig = sdk.SpeechConfig.fromSubscription(speechKey, speechRegion);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const pronunciationConfig = new sdk.PronunciationAssessmentConfig(
      referenceText,
      sdk.PronunciationAssessmentGradingSystem.HundredMark,
      sdk.PronunciationAssessmentGranularity.Phoneme,
      true
    );
    pronunciationConfig.enableProsodyAssessment = true;

    const pushStream = sdk.AudioInputStream.createPushStream(
      sdk.AudioStreamFormat.getWaveFormatPCM(16000, 16, 1)
    );
    pushStream.write(audioData.buffer as ArrayBuffer);
    pushStream.close();

    const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
    pronunciationConfig.applyTo(recognizer);

    const result = await new Promise<sdk.SpeechRecognitionResult>((resolve, reject) => {
      recognizer.recognizeOnceAsync(
        (res) => {
          recognizer.close();
          resolve(res);
        },
        (err) => {
          recognizer.close();
          reject(new Error(err));
        }
      );
    });

    if (result.reason === sdk.ResultReason.RecognizedSpeech) {
      const pronResult = sdk.PronunciationAssessmentResult.fromResult(result);

      const detailJson = result.properties.getProperty(
        sdk.PropertyId.SpeechServiceResponse_JsonResult
      );

      let wordScores: { word: string; accuracyScore: number; errorType: string }[] = [];
      let phonemeErrors: { phoneme: string; actual: string; expected: string; word: string }[] = [];

      try {
        const detail = JSON.parse(detailJson);
        const nBest = detail?.NBest?.[0];
        if (nBest?.Words) {
          wordScores = nBest.Words.map((w: { Word: string; PronunciationAssessment: { AccuracyScore: number; ErrorType: string } }) => ({
            word: w.Word,
            accuracyScore: w.PronunciationAssessment?.AccuracyScore ?? 0,
            errorType: w.PronunciationAssessment?.ErrorType ?? 'None',
          }));

          for (const w of nBest.Words) {
            if (w.Phonemes) {
              for (const p of w.Phonemes) {
                if (p.PronunciationAssessment?.AccuracyScore < 60) {
                  phonemeErrors.push({
                    phoneme: p.Phoneme,
                    actual: p.Phoneme,
                    expected: p.Phoneme,
                    word: w.Word,
                  });
                }
              }
            }
          }
        }
      } catch {
        // JSON parsing failed, continue with empty arrays
      }

      return NextResponse.json({
        accuracyScore: pronResult.accuracyScore,
        fluencyScore: pronResult.fluencyScore,
        completenessScore: pronResult.completenessScore,
        pronScore: pronResult.pronunciationScore,
        wordScores,
        phonemeErrors,
      });
    }

    // Fallback for no speech recognized
    return NextResponse.json({
      accuracyScore: 0,
      fluencyScore: 0,
      completenessScore: 0,
      pronScore: 0,
      wordScores: [],
      phonemeErrors: [],
      warning: 'No speech was recognized. Please try speaking more clearly.',
    });
  } catch (error) {
    console.error('Pronunciation assessment error:', error);
    return NextResponse.json(
      { error: 'Failed to assess pronunciation', details: String(error) },
      { status: 500 }
    );
  }
}
