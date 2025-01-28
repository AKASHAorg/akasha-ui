"use client";

import { useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import DuplexButton, {
  DuplexButtonActive,
  DuplexButtonActiveDefault,
  DuplexButtonActiveHover,
  DuplexButtonInactive,
} from "@/registry/default/akasha-ui/duplex-button";

export default function DuplexButtonDemo() {
  const [active, setActive] = useState(false);
  return (
    <DuplexButton active={active}>
      <DuplexButtonActive onClick={() => setActive(true)}>
        <DuplexButtonActiveDefault variant="default">
          Following <UserIcon className="h-4 w-4" />
        </DuplexButtonActiveDefault>
        <DuplexButtonActiveHover variant="outline">
          Unfollow <UsersIcon className="h-4 w-4" />
        </DuplexButtonActiveHover>
      </DuplexButtonActive>

      <DuplexButtonInactive variant="default" onClick={() => setActive(false)}>
        Follow <UsersIcon className="h-4 w-4" />
      </DuplexButtonInactive>
    </DuplexButton>
  );
}
