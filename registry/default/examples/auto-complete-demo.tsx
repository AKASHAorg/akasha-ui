"use client";

import { useState } from "react";

import {
  AutoComplete,
  Option,
} from "@/registry/default/akasha-ui/auto-complete";

// Sample data for demonstrations
const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "wordpress", label: "WordPress" },
  { value: "express", label: "Express.js" },
  { value: "nest", label: "Nest.js" },
];

export default function AutoCompleteDemo() {
  const [singleValue, setSingleValue] = useState<Option | undefined>();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <AutoComplete
          options={frameworks}
          value={singleValue}
          onValueChange={(value) => setSingleValue(value as Option)}
          placeholder="Select a framework"
          emptyMessage="No framework found."
        />
        <p className="text-sm text-muted-foreground">
          Selected: {singleValue?.label || "None"}
        </p>
      </div>
    </div>
  );
}
