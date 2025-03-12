"use client";

import * as React from "react";

import { Button } from "@/registry/default/ui/button";
import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/ui/profile-avatar";
import { Stack } from "@/registry/default/ui/stack";
import { Textarea } from "@/registry/default/ui/textarea";

interface ReplyEditorProps {
  onReplyClick?: (content: string) => void;
  avatarSrc: string;
}

function ReplyEditor({ onReplyClick, avatarSrc }: ReplyEditorProps) {
  const [content, setContent] = React.useState("");

  const handleReplyClick = () => {
    if (content.trim() && onReplyClick) {
      onReplyClick(content);
      setContent("");
    }
  };

  return (
    <Stack direction="column" spacing={4} className="w-full relative">
      <Textarea
        placeholder="My thoughts on this are..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={1}
        className="pl-12 pr-24 h-8 py-5 focus:min-h-[90px] overflow-auto resize-none transition-all duration-200"
      />
      <ProfileAvatar className="absolute top-4 left-2" size="md">
        <ProfileAvatarImage src={avatarSrc} />
        <ProfileAvatarFallback />
      </ProfileAvatar>
      <Button
        onClick={handleReplyClick}
        disabled={!content.trim()}
        className="absolute bottom-3 right-2"
      >
        Reply
      </Button>
    </Stack>
  );
}

export { ReplyEditor };
