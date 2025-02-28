import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

const AppNotInstalled = ({
  className,
  ...props
}: React.ComponentProps<typeof InlineNotification>) => {
  return (
    <InlineNotification
      variant="info"
      className={cn("border-border bg-nested-card", className)}
      {...props}
    >
      <InlineNotificationTitle>
        [App name] not installed
      </InlineNotificationTitle>
      <InlineNotificationDescription>
        You can install it to view it.
        <Button variant="link" size="sm">
          Install
        </Button>
      </InlineNotificationDescription>
    </InlineNotification>
  );
};

export default AppNotInstalled;
