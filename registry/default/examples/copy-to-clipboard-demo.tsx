import { CopyToClipboard } from "@/registry/default/ui/copy-to-clipboard";
import {
  ProfileAvatarButton,
  ProfileDidField,
} from "@/registry/default/ui/profile-avatar-button";

export default function CopyToClipboardDemo() {
  return (
    <CopyToClipboard
      textToCopy="0x8a022905463998860516390fb27548479a098b95"
      ctaText="Copy address"
      successText="Copied ✓"
    >
      <ProfileAvatarButton>
        <ProfileDidField did="did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95" />
      </ProfileAvatarButton>
    </CopyToClipboard>
  );
}
