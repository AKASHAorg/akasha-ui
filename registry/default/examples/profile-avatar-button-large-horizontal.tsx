import {
  ProfileAvatarButton,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";

export default function ProfileAvatarButtonLargeHorizontal() {
  return (
    <ProfileAvatarButton
      size="lg"
      profileDID="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95"
    >
      <ProfileAvatarButton.Avatar>
        <ProfileAvatarButton.AvatarImage
          src="https://github.com/akashaorg.png"
          alt="@akashaorg"
        />
        <ProfileAvatarButton.AvatarFallback />
      </ProfileAvatarButton.Avatar>
      <ProfileName>CoffeeLover</ProfileName>
      <ProfileDidField />
    </ProfileAvatarButton>
  );
}
