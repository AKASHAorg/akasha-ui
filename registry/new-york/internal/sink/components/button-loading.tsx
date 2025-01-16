import { Button } from "@/registry/new-york/ui/button";
import { Loader2 } from "lucide-react";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
}
