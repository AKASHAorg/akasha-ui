import {
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileAvatarFallback,
  ProfileAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";

export default function ProfileAvatarButtonNsfw() {
  return (
    <ProfileAvatarButton
      profileDID="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95"
      size="md"
      nsfwLabel="NSFW"
      nsfw
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
