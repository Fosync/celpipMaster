'use client';

interface AnalysisLoadingProps {
  stage: 'pronunciation' | 'feedback' | 'complete';
}

const steps = [
  { key: 'pronunciation', label: 'Analyzing pronunciation...' },
  { key: 'feedback', label: 'Generating feedback...' },
  { key: 'complete', label: 'Almost ready...' },
] as const;

type StepKey = (typeof steps)[number]['key'];

function getStepStatus(
  stepKey: StepKey,
  currentStage: AnalysisLoadingProps['stage']
): 'pending' | 'active' | 'complete' {
  const order: StepKey[] = ['pronunciation', 'feedback', 'complete'];
  const currentIndex = order.indexOf(currentStage);
  const stepIndex = order.indexOf(stepKey);

  if (stepIndex < currentIndex) return 'complete';
  if (stepIndex === currentIndex) return 'active';
  return 'pending';
}

function Spinner() {
  return (
    <svg
      className="w-5 h-5 text-blue-500"
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: 'analysis-spin 1s linear infinite' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={3}
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Checkmark() {
  return (
    <svg
      className="w-5 h-5 text-green-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function AnalysisLoading({ stage }: AnalysisLoadingProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
          Analyzing Your Response
        </h3>

        <div className="space-y-4">
          {steps.map((step) => {
            const status = getStepStatus(step.key, stage);
            return (
              <div
                key={step.key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  status === 'active'
                    ? 'bg-blue-50 border border-blue-100'
                    : status === 'complete'
                    ? 'bg-green-50 border border-green-100'
                    : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {status === 'active' && <Spinner />}
                  {status === 'complete' && <Checkmark />}
                  {status === 'pending' && (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    status === 'active'
                      ? 'text-blue-700'
                      : status === 'complete'
                      ? 'text-green-700'
                      : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-blue-400"
                style={{
                  animation: `analysis-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes analysis-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes analysis-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}} />
    </div>
  );
}
