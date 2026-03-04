"use client";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      {/* Mobile: progress bar */}
      <div className="mb-6 sm:hidden">
        <div className="flex items-center justify-between text-sm">
          <span className="text-earth">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="font-semibold text-forest">{steps[currentStep]}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-dark">
          <div
            className="h-full rounded-full bg-forest transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: numbered steps */}
      <ol className="hidden items-start sm:flex">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <li key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isCompleted
                      ? "bg-forest text-cream"
                      : isCurrent
                      ? "border-2 border-forest bg-cream text-forest"
                      : "border-2 border-stone-darker bg-cream text-earth-light"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`mt-2 max-w-[80px] text-center text-xs font-medium ${
                    isCurrent ? "text-forest" : isCompleted ? "text-earth" : "text-earth-light"
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 mb-6 h-0.5 flex-1 transition-colors duration-300 ${
                    isCompleted ? "bg-forest" : "bg-stone-darker"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
