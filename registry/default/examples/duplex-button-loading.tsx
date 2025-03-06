"use client";

import { useState } from "react";
import { UserIcon, UsersIcon } from "lucide-react";

import {
  DuplexButton,
  DuplexButtonActive,
  DuplexButtonHover,
  DuplexButtonInactive,
} from "@/registry/default/ui/duplex-button";

export default function DuplexButtonLoading() {
  const [follow, setFollow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <DuplexButton active={follow} loading={loading}>
      <DuplexButtonInactive
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setFollow(true);
            setLoading(false);
          }, 1000);
        }}
        variant="outline"
      >
        Follow <UsersIcon size={16} />
      </DuplexButtonInactive>

      <DuplexButtonHover
        variant="destructive"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setFollow(false);
            setLoading(false);
          }, 1000);
        }}
      >
        Unfollow <UsersIcon size={16} />
      </DuplexButtonHover>

      <DuplexButtonActive variant="outline">
        Following <UserIcon size={16} />
      </DuplexButtonActive>
    </DuplexButton>
  );
}
