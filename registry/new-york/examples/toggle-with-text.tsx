import { Toggle } from "@/registry/new-york/ui/toggle";
import { Italic } from "lucide-react";

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  );
}
