import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/ui/profile-avatar";

export default function ProfileAvatarExtraLarge() {
  return (
    <ProfileAvatar size="xl">
      <ProfileAvatarImage
        src="https://github.com/akashaorg.png"
        alt="@akashaorg"
      />
      <ProfileAvatarFallback>AK</ProfileAvatarFallback>
    </ProfileAvatar>
  );
}
