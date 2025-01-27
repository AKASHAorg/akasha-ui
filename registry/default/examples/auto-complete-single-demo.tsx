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

export default function AutoCompleteSingleDemo() {
  const [selected, setSelected] = useState<Option>();
  return (
    <div className="flex flex-col gap-2">
      <AutoComplete
        options={frameworks}
        placeholder="Select framework..."
        emptyMessage="No framework found."
        multiple={false}
        value={selected}
        onValueChange={(value) => setSelected(value as Option)}
      />
    </div>
  );
}
