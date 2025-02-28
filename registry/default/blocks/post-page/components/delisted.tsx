import { cn } from "@/lib/utils";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

const Delisted = ({
  className,
  ...props
}: React.ComponentProps<typeof InlineNotification>) => {
  return (
    <InlineNotification
      variant="delete"
      className={cn("border-border bg-nested-card", className)}
      {...props}
    >
      <InlineNotificationTitle>
        This post was delisted by its author
      </InlineNotificationTitle>
      <InlineNotificationDescription>
        Only the author has access to it.
      </InlineNotificationDescription>
    </InlineNotification>
  );
};

export default Delisted;
