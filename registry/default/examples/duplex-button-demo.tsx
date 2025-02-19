"use client";

import { useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import {
  DuplexButton,
  DuplexButtonActive,
  DuplexButtonHover,
  DuplexButtonInactive,
} from "@/registry/default/ui/duplex-button";

export default function DuplexButtonDemo() {
  const [follow, setFollow] = useState(false);
  return (
    <DuplexButton active={follow}>
      <DuplexButtonInactive
        onClick={() => {
          setFollow(true);
        }}
        variant="outline"
      >
        Follow <UsersIcon size={16} />
      </DuplexButtonInactive>

      <DuplexButtonHover
        variant="destructive"
        onClick={() => {
          setFollow(false);
        }}
      >
        Unfollow <UsersIcon size={16} />
      </DuplexButtonHover>

      <DuplexButtonActive variant="secondary">
        Following <UserIcon size={16} />
      </DuplexButtonActive>
    </DuplexButton>
  );
}
