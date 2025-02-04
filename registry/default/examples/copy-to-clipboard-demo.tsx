// CopyToClipboard demo

import CopyToClipboard from "@/registry/default/akasha-ui/copy-to-clipboard";

export default function CopyToClipboardDemo() {
  return (
    <CopyToClipboard textToCopy="Hello, world!" tooltipText="Copy the greeting 👋" />
  );
}
