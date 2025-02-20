import {
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileAvatarFallback,
  ProfileAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";
import { Typography } from "@/registry/default/ui/typography";

export default function ProfileAvatarButtonMetadata() {
  return (
    <ProfileAvatarButton
      size="md"
      profileDID="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95"
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
        <ProfileAvatarFallback />
      </ProfileAvatar>
      <ProfileName>CoffeeLover</ProfileName>
      <ProfileDidField />
    </ProfileAvatarButton>
  );
}
