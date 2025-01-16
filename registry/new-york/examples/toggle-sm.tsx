import { Toggle } from "@/registry/new-york/ui/toggle";
import { Italic } from "lucide-react";

export default function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}
