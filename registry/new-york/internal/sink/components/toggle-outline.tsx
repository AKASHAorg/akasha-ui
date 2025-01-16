import { Toggle } from "@/registry/new-york/ui/toggle";
import { Italic } from "lucide-react";

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}
