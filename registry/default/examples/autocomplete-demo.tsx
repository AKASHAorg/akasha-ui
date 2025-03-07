"use client";

import { useState } from "react";

import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteTrigger,
} from "@/registry/default/ui/autocomplete";

export default function AutoCompleteDemo() {
  const [singleValue, setSingleValue] = useState<string>("");

  return (
    <div className="flex flex-col gap-2">
      <Autocomplete
        value={singleValue}
        emptyMessage="No framework found."
        onValueChange={setSingleValue}
      >
        <AutocompleteTrigger placeholder="Select a framework" />
        <AutocompleteList>
          <AutocompleteItem value="next">Next.js</AutocompleteItem>
          <AutocompleteItem value="sveltekit">SvelteKit</AutocompleteItem>
          <AutocompleteItem value="nuxt">Nuxt.js</AutocompleteItem>
          <AutocompleteItem value="remix">Remix</AutocompleteItem>
          <AutocompleteItem value="astro">Astro</AutocompleteItem>
          <AutocompleteItem value="wordpress">WordPress</AutocompleteItem>
          <AutocompleteItem value="express">Express.js</AutocompleteItem>
          <AutocompleteItem value="nest">Nest.js</AutocompleteItem>
        </AutocompleteList>
      </Autocomplete>
      <p className="text-sm text-muted-foreground">
        Selected: {singleValue || "None"}
      </p>
    </div>
  );
}
