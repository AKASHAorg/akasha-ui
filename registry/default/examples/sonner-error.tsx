import { toast } from "sonner";

import { Button } from "@/registry/default/ui/button";

export default function SonnerError() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.error("", {
          description: "Some important information will appear here",
          action: {
            label: "ok",
            onClick: () => console.log("ok"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
