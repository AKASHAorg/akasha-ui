"use client";

import * as React from "react";

import {
  AutoComplete,
  type Option,
} from "@/registry/default/akasha-ui/auto-complete";

// Sample data for demonstrations
const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function AutoCompleteDemo() {
  const [basicValue, setBasicValue] = React.useState<Option | Option[]>();
  const [multiValue, setMultiValue] = React.useState<Option[]>([]);

  return (
    <div className="flex flex-col gap-8">
      {/* Basic Usage */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Basic Autocomplete</h3>
        <AutoComplete
          options={frameworks}
          value={basicValue}
          onValueChange={setBasicValue}
          placeholder="Select a framework..."
          emptyMessage="No frameworks found"
        />
        <p className="text-sm text-muted-foreground">
          Selected value: {(basicValue as Option)?.label || "None"}
        </p>
      </div>

      {/* Multiple Selection */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Multiple Selection</h3>
        <AutoComplete
          options={frameworks}
          value={multiValue}
          onValueChange={(value) => {
            if (Array.isArray(value)) {
              setMultiValue(value);
            }
          }}
          placeholder="Select frameworks..."
          emptyMessage="No frameworks found"
          multiple
        />
        <p className="text-sm text-muted-foreground">
          Selected values:{" "}
          {multiValue.length
            ? multiValue.map((v) => v.label).join(", ")
            : "None"}
        </p>
      </div>
    </div>
  );
}
