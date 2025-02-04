import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/akasha-ui/inline-notification";

export default function InlineNotificationError() {
  return (
    <InlineNotification variant="error">
      <InlineNotificationTitle>Heads up!</InlineNotificationTitle>
      <InlineNotificationDescription>
        You can add components and dependencies to your app using the cli.
      </InlineNotificationDescription>
    </InlineNotification>
  );
}
