"use client";

import { useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import DuplexButton, {
  DuplexButtonActive,
  DuplexButtonHover,
  DuplexButtonInactive,
} from "@/registry/default/akasha-ui/duplex-button";

export default function DuplexButtonDemo() {
  const [active, setActive] = useState(false);
  return (
    <DuplexButton active={active}>
      <DuplexButtonInactive
        variant="default"
        onClick={() => {
          setActive(true);
        }}
      >
        Follow <UsersIcon className="h-4 w-4" />
      </DuplexButtonInactive>

      <DuplexButtonHover
        variant="outline"
        onClick={() => {
          setActive(false);
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
