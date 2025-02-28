import * as React from "react";

import { cn } from "@/lib/utils";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

const CouldNotLoad = ({
  className,
  ...props
}: React.ComponentProps<typeof InlineNotification>) => {
  return (
    <InlineNotification
      variant="destructive"
      className={cn("border-border bg-nested-card", className)}
      {...props}
    >
      <InlineNotificationTitle>
        Content couldn’t be loaded correctly
      </InlineNotificationTitle>
      <InlineNotificationDescription>
        Unable to load content. Please try again later.
      </InlineNotificationDescription>
    </InlineNotification>
  );
};

export default CouldNotLoad;
