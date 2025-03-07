"use client";

import { useState } from "react";

import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteTrigger,
} from "@/registry/default/ui/autocomplete";
import {
  TagsInput,
  TagsInputItem,
  TagsInputList,
} from "@/registry/default/ui/tags-input";

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

export default function TagsInputAutocomplete() {
  const [value, setValue] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "next",
    "remix",
    "astro",
    "nest",
  ]);

  const handleValueChange = (value: string[]) => {
    setSelectedValues(value);
  };

  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <Autocomplete
        multiple
        value={selectedValues}
        onValueChange={handleValueChange}
        className="w-full max-w-md"
      >
        <AutocompleteTrigger asChild>
          <TagsInput
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onTagsChange={(tags, newTagAdded) => {
              if (newTagAdded) {
                setValue("");
              }
              setSelectedValues([...tags]);
            }}
            placeholder="Interests"
            className="w-100"
          >
            <TagsInputList>
              {selectedValues.map((interest) => (
                <TagsInputItem key={interest} tag={interest}>
                  {
                    frameworks.find((framework) => framework.value === interest)
                      ?.label
                  }
                </TagsInputItem>
              ))}
            </TagsInputList>
          </TagsInput>
        </AutocompleteTrigger>
        <AutocompleteList>
          {frameworks.map((framework) => (
            <AutocompleteItem key={framework.value} value={framework.value}>
              {framework.label}
            </AutocompleteItem>
          ))}
        </AutocompleteList>
      </Autocomplete>
    </div>
  );
}
