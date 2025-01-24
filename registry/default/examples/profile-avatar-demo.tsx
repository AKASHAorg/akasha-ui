import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/akasha-ui/profile-avatar";

export default function ProfileAvatarDemo() {
  return (
    <ProfileAvatar>
      <ProfileAvatarImage
        src="https://github.com/akashaorg.png"
        alt="@akashaorg"
      />
      <ProfileAvatarFallback>AK</ProfileAvatarFallback>
    </ProfileAvatar>
  );
}
