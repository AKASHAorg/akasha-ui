import { useToast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import { ToastAction } from "@/registry/default/ui/toast";

export default function ToastDestructiveDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Some important information will appear here",
          variant: "destructive",
          action: <ToastAction altText="Ok">Ok</ToastAction>,
        });
      }}
    >
      Show toast
    </Button>
  );
}
