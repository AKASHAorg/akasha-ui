"use client";

import { useEffect, useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import {
  DuplexButton,
  DuplexButtonActive,
  DuplexButtonHover,
  DuplexButtonInactive,
} from "@/registry/default/ui/duplex-button";

export default function DuplexButtonDisabled() {
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    setTimeout(() => setFollow(true), 2000);
  }, []);

  return (
    <DuplexButton active={follow} disabled={true}>
      <DuplexButtonInactive variant="outline">
        Follow <UsersIcon size={16} />
      </DuplexButtonInactive>

      <DuplexButtonHover variant="destructive">
        Unfollow <UsersIcon size={16} />
      </DuplexButtonHover>

      <DuplexButtonActive variant="outline">
        Following <UserIcon size={16} />
      </DuplexButtonActive>
    </DuplexButton>
  );
}
