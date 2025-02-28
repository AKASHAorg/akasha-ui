import * as React from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";

export default function CheckboxDisabledDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-conditions" disabled checked />
      <label
        htmlFor="terms-conditions"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
