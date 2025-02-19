import {
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileAvatarFallback,
  ProfileAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";

export default function ProfileAvatarButtonLargeHorizontal() {
  return (
    <ProfileAvatarButton size="lg">
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
