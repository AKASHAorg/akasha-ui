import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/akasha-ui/profile-avatar";

export default function ProfileAvatarNSFW() {
  return (
    <ProfileAvatar nsfw>
      <ProfileAvatarImage
        src="https://github.com/akashaorg.png"
        alt="@akashaorg"
      />
      <ProfileAvatarFallback>AK</ProfileAvatarFallback>
    </ProfileAvatar>
  );
}
