import { Button } from "@/registry/default/ui/button";

export default function ButtonAsChild() {
  return (
    <Button variant="link" asChild>
      <a href="#primary">Primary</a>
    </Button>
  );
}
