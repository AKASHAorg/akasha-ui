"use client";

import React from "react";

import { Stepper } from "@/registry/default/akasha-ui/stepper";
import { Button } from "@/registry/default/ui/button";

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const numberOfSteps = 5;
  return (
    <div className="w-full flex flex-col gap-10 justify-center">
      <Stepper currentStep={currentStep} numberOfSteps={numberOfSteps} />
      <div className="flex gap-2 justify-center">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={currentStep === numberOfSteps + 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
