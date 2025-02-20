import * as React from "react";

import {
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileAvatarFallback,
  ProfileAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default//ui/profile-avatar-button";
import {
  ExtensionCard,
  ExtensionCardAction,
  ExtensionCardActionActive,
  ExtensionCardActionInactive,
  ExtensionCardAvatar,
  ExtensionCardAvatarFallback,
  ExtensionCardAvatarImage,
  ExtensionCardContent,
  ExtensionCardDescription,
  ExtensionCardName,
} from "@/registry/default/ui/extension-card";

export default function ExtensionCardDemo() {
  const [active, setActive] = React.useState(false);
  return (
    <ExtensionCard>
      <ExtensionCardAvatar>
        <ExtensionCardAvatarImage
          src="https://github.com/akashaorg.png"
          alt="@akashaorg"
        />
        <ExtensionCardAvatarFallback />
      </ExtensionCardAvatar>
      <ExtensionCardContent>
        <ExtensionCardName>Extensions</ExtensionCardName>
        <ProfileAvatarButton
          size="sm"
          profileDID="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95"
        >
          <ProfileAvatar>
            <ProfileAvatarImage
              src="https://github.com/akashaorg.png"
              alt="@akashaorg"
            />
            <ProfileAvatarFallback />
          </ProfileAvatar>
          <ProfileName>CoffeeLover</ProfileName>
          <ProfileDidField />
        </ProfileAvatarButton>
        <ExtensionCardDescription>App for extensions.</ExtensionCardDescription>
      </ExtensionCardContent>
      <ExtensionCardAction active={active}>
        <ExtensionCardActionInactive
          onClick={() => {
            setActive(true);
          }}
        >
          Add
        </ExtensionCardActionInactive>
        <ExtensionCardActionActive
          onClick={() => {
            setActive(false);
          }}
        >
          Added
        </ExtensionCardActionActive>
      </ExtensionCardAction>
    </ExtensionCard>
  );
}
