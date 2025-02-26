import * as React from "react";

import {
  ExtensionAvatar,
  ExtensionAvatarFallback,
  ExtensionAvatarImage,
} from "../ui/extension-avatar";

export default function ExtensionCardDemo() {
  return (
    <ExtensionAvatar>
      <ExtensionAvatarImage
        src="https://github.com/akashaorg.png"
        alt="@akashaorg"
        showLoadingIndicator={true}
      >
        <ExtensionAvatarFallback />
      </ExtensionAvatarImage>
    </ExtensionAvatar>
  );
}
