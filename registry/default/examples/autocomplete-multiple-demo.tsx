"use client";

import { useState } from "react";
import { X } from "lucide-react";

import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteTrigger,
} from "@/registry/default/ui/autocomplete";
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
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleValueChange = (value: string[]) => {
    setSelectedValues(value);
  };

  const handleRemove = (valueToRemove: string) => {
    setSelectedValues((prev) => prev.filter((item) => item !== valueToRemove));
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Autocomplete
        multiple
        value={selectedValues}
        emptyMessage="No framework found."
        onValueChange={handleValueChange}
        className="w-56"
      >
        <AutocompleteTrigger placeholder="Select frameworks..." />
        <AutocompleteList>
          {frameworks.map((framework) => (
            <AutocompleteItem key={framework.value} value={framework.value}>
              {framework.label}
            </AutocompleteItem>
          ))}
        </AutocompleteList>
      </Autocomplete>

      <div className="flex flex-wrap gap-2">
        {selectedValues.map((value) => {
          const label =
            frameworks.find((f) => f.value === value)?.label || value;
          return (
            <Badge key={value} variant="secondary">
              {label}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 ml-2"
                onClick={() => handleRemove(value)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          );
        })}
      </div>

      <p className="text-sm text-muted-foreground">
        Selected: {selectedValues.length ? selectedValues.join(", ") : "None"}
      </p>
    </div>
  );
}
