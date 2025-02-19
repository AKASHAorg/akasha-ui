import {
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileAvatarFallback,
  ProfileAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/akasha-ui/profile-avatar-button";

import { Typography } from "../akasha-ui/typography";

export default function ProfileAvatarButtonMetadata() {
  return (
    <ProfileAvatarButton
      size="md"
      metadata={
        <Typography variant="xs" className="text-muted-foreground">
          · 5 mins ago
        </Typography>
      }
    >
      <ProfileAvatar>
        <ProfileAvatarImage
          src="https://github.com/akashaorg.png"
          alt="@akashaorg"
        />
        <ProfileAvatarFallback>AK</ProfileAvatarFallback>
      </ProfileAvatar>
      <ProfileName>CoffeeLover</ProfileName>
      <ProfileDidField did="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95" />
    </ProfileAvatarButton>
  );
}
