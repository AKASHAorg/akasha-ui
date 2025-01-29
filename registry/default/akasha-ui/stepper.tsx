import React from "react";
import { Check, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  currentStep: number;
  numberOfSteps: number;
}

export const Stepper = React.forwardRef<HTMLElement, StepperProps>(
  ({ currentStep, numberOfSteps, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("w-full", className)}
        {...props}
        aria-label="Progress"
      >
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
                  {isCompleted ? (
                    <Check className="text-primary-foreground transition-colors duration-300 w-3.5" />
                  ) : (
                    <Circle
                      className={cn(
                        "h-2.5 w-2.5 transition-colors duration-300",
                        isActive
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      )}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
