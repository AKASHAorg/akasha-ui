import {
  ProfileAvatarButton,
  ProfileAvatarButtonAvatar,
  ProfileAvatarButtonAvatarFallback,
  ProfileAvatarButtonAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";

export default function ProfileAvatarButtonDemo() {
  return (
    <ProfileAvatarButton profileDID="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95">
      <ProfileAvatarButtonAvatar>
        <ProfileAvatarButtonAvatarImage
          src="https://github.com/akashaorg.png"
          alt="@akashaorg"
        />
        <ProfileAvatarButtonAvatarFallback />
      </ProfileAvatarButtonAvatar>
      <ProfileName>CoffeeLover</ProfileName>
      <ProfileDidField />
    </ProfileAvatarButton>
  );
}
