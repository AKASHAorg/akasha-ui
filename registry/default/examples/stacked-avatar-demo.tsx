import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/ui/profile-avatar";
import { StackedAvatar } from "@/registry/default/ui/stacked-avatar";

export default function StackedAvatarDemo() {
  const avatars = [
    { src: "https://github.com/akashaorg.png", alt: "@akashaorg" },
    { src: "https://github.com/akashaorg.png", alt: "@akashaorg" },
    { src: "https://github.com/akashaorg.png", alt: "@akashaorg" },
    { src: "https://github.com/akashaorg.png", alt: "@akashaorg" },
  ];
  return (
    <StackedAvatar count={avatars.length}>
      {(index) => (
        <ProfileAvatar>
          <ProfileAvatarImage
            src={avatars[index].src}
            alt={avatars[index].alt}
          />
          <ProfileAvatarFallback />
        </ProfileAvatar>
      )}
    </StackedAvatar>
  );
}
