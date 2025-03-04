import * as React from "react";
import { EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

const NsfwWarning = ({
  className,
  onShowClick,
  ...props
}: React.ComponentProps<typeof Card> & {
  onShowClick?: () => void;
}) => {
  return (
    <Card
      className={cn("border-border pb-0 bg-nested-card", className)}
      {...props}
    >
      <Stack direction="column" spacing={2} alignItems="center">
        <EyeOff size={20} className="text-destructive" />
        <Typography variant="sm" className="font-bold">
          Content Warning: Not Safe Work
        </Typography>
        <Typography variant="sm">
          The post author marked this post as NSFW
        </Typography>
        <Button variant="link" className="px-8" onClick={onShowClick}>
          Show
        </Button>
      </Stack>
    </Card>
  );
};

export default NsfwWarning;
