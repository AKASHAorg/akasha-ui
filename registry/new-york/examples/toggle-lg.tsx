import { Toggle } from "@/registry/new-york/ui/toggle";
import { Italic } from "lucide-react";

export default function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}
