"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Autocomplete, type Option } from "@/registry/default/ui/autocomplete";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";

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

export default function AutoCompleteMultipleDemo() {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const handleValueChange = (value: Option[] | undefined) => {
    if (!value) return;
    setSelectedValues(value);
  };

  const handleRemove = (valueToRemove: string) => {
    setSelectedValues((prev) =>
      prev.filter((item) => item.value !== valueToRemove)
    );
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Autocomplete
        options={frameworks}
        value={selectedValues}
        onValueChange={(value) => handleValueChange(value as Option[])}
        placeholder="Select frameworks..."
        emptyMessage="No framework found."
        multiple={true}
        className="w-56"
      />
      <div className="flex flex-wrap gap-2">
        {selectedValues.map((framework) => (
          <Badge key={framework.value} variant="secondary">
            {framework.label}
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 ml-2"
              onClick={() => handleRemove(framework.value)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Selected:{" "}
        {selectedValues.length
          ? selectedValues.map((v) => v.label).join(", ")
          : "None"}
      </p>
    </div>
  );
}
