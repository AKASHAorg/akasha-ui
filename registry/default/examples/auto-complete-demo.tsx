"use client";

import * as React from "react";

import { AutoComplete } from "@/registry/default/akasha-ui/auto-complete";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
];

export default function AutoCompleteDemo() {
  const [loading, setLoading] = React.useState(false);
  const [selectedFramework, setSelectedFramework] = React.useState<
    | {
        value: string;
        label: string;
      }
    | undefined
  >(undefined);

  // Simulate loading state when selecting a framework
  const handleSelect = (option: { value: string; label: string }) => {
    setLoading(true);
    setSelectedFramework(option);

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <AutoComplete
        options={frameworks}
        placeholder="Select framework..."
        isLoading={loading}
        onValueChange={handleSelect}
        value={selectedFramework}
        emptyMessage="No framework found."
      />

      {selectedFramework && (
        <p className="text-sm text-muted-foreground">
          You selected: {selectedFramework.label}
        </p>
      )}
    </div>
  );
}
