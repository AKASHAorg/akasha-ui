"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";

import {
  AutoComplete,
  type AutoCompleteRef,
  type Option,
} from "@/registry/default/akasha-ui/auto-complete";
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

export default function AutoCompleteDemo() {
  return (
    <div className="flex flex-col gap-4">
      <BasicExample />
      <MultipleWithExternalDeselect />
    </div>
  );
}

function BasicExample() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">Basic example:</p>
      <AutoComplete
        options={frameworks}
        placeholder="Select framework..."
        emptyMessage="No framework found."
      />
    </div>
  );
}

function MultipleWithExternalDeselect() {
  const autoCompleteRef = useRef<AutoCompleteRef>(null);
  const [selected, setSelected] = useState<Option[]>([]);

  const handleValueChange = (value: Option | Option[]) => {
    if (Array.isArray(value)) {
      setSelected(value);
    }
  };

  const handleDeselect = (option: Option) => {
    autoCompleteRef.current?.deselectOption(option);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">
        Multiple selection with external deselect:
      </p>

      <div className="flex flex-col gap-4">
        <AutoComplete
          ref={autoCompleteRef}
          options={frameworks}
          placeholder="Select frameworks..."
          emptyMessage="No framework found."
          multiple
          value={selected}
          onValueChange={handleValueChange}
        />

        <div className="flex flex-wrap gap-2">
          {selected.map((option) => (
            <Badge key={option.value} variant="secondary">
              {option.label}
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 h-auto p-0 hover:bg-transparent"
                onClick={() => handleDeselect(option)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {option.label}</span>
              </Button>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
