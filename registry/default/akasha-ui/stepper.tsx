import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
  numberOfSteps: number;
  className?: string;
}

const CheckIcon = () => (
  <svg
    className="text-primary-foreground transition-colors duration-300"
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/3000/svg"
    aria-hidden="true"
  >
    <path
      d="M1.16669 6.83334L4.50002 10.1667L12.8334 1.83334"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DotIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    className={cn(
      isActive ? "text-primary" : "text-muted",
      "transition-colors duration-300"
    )}
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/3000/svg"
    aria-hidden="true"
  >
    <circle cx="5" cy="5" r="5" fill="currentColor" />
  </svg>
);

export function Stepper({
  currentStep,
  numberOfSteps,
  className,
}: StepperProps) {
  return (
    <nav aria-label="Progress" className={cn("w-full", className)}>
      <ol role="list" className="flex items-center justify-between">
        {[...Array(numberOfSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isLast = index === numberOfSteps - 1;

          return (
            <li
              key={stepNumber}
              className={cn("relative", !isLast && "flex-1")}
              aria-current={isActive ? "step" : undefined}
            >
              {!isLast && (
                <div
                  className={cn(
                    "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 transition-colors duration-300",
                    isCompleted ? "bg-primary" : "bg-muted"
                  )}
                  aria-hidden="true"
                />
              )}
              <div
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300",
                  isActive
                    ? "border-primary bg-background"
                    : isCompleted
                    ? "border-primary bg-primary"
                    : "border-muted bg-background"
                )}
                aria-label={`Step ${stepNumber}`}
              >
                {isCompleted ? <CheckIcon /> : <DotIcon isActive={isActive} />}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
