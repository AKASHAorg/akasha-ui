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
        variant="default"
        onClick={() => {
          setFollow(true);
        }}
      >
        Follow <UsersIcon className="h-4 w-4" />
      </DuplexButtonInactive>

      <DuplexButtonHover
        variant="outline"
        onClick={() => {
          setFollow(false);
        }}
      >
        Unfollow <UsersIcon className="h-4 w-4" />
      </DuplexButtonHover>

      <DuplexButtonActive>
        Following <UserIcon className="h-4 w-4" />
      </DuplexButtonActive>
    </DuplexButton>
  );
}
