import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

export default function InlineNotificationError() {
  return (
    <InlineNotification variant="destructive">
      <InlineNotificationTitle>Heads up!</InlineNotificationTitle>
      <InlineNotificationDescription>
        You can add components and dependencies to your app using the cli.
      </InlineNotificationDescription>
    </InlineNotification>
  );
}
