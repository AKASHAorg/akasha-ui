import { Button } from "@/registry/default/ui/button";

export default function ButtonAsChild() {
  return (
    <Button variant="link" asChild>
      <a rel="noreferrer" href="#primary">
        Primary
      </a>
    </Button>
  );
}
