"use client";

import { useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import {
  DuplexButton,
  DuplexButtonActive,
  DuplexButtonHover,
  DuplexButtonInactive,
} from "@/registry/default/akasha-ui/duplex-button";

export default function DuplexButtonDemo() {
  const [follow, setFollow] = useState(false);
  return (
    <DuplexButton active={follow}>
      <DuplexButtonInactive
        onClick={() => {
          setFollow(true);
        }}
      >
        Follow <UsersIcon className="h-4 w-4" />
      </DuplexButtonInactive>

      <DuplexButtonHover
        variant="destructive"
        onClick={() => {
          setFollow(false);
        }}
      >
        Unfollow <UsersIcon className="h-4 w-4" />
      </DuplexButtonHover>

      <DuplexButtonActive variant="secondary">
        Following <UserIcon className="h-4 w-4" />
      </DuplexButtonActive>
    </DuplexButton>
  );
}
