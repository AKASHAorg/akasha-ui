"use client";

import { useState } from "react";

import {
  Autocomplete,
  type Option,
} from "@/registry/default/akasha-ui/autocomplete";

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
  const [singleValue, setSingleValue] = useState<Option>();

  return (
    <div className="flex flex-col gap-2">
      <Autocomplete
        options={frameworks}
        value={singleValue}
        onValueChange={(value) => setSingleValue(value)}
        placeholder="Select a framework"
        emptyMessage="No framework found."
      />
      <p className="text-sm text-muted-foreground">
        Selected: {singleValue?.label || "None"}
      </p>
    </div>
  );
}
