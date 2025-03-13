"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

import { ContentCard } from "./content-card";
import { REPLIES } from "./reply-mock-data";

type ReplyPreviewProps = {
  className?: string;
  replyId: string;
  onRepliesClick: () => void;
};

let errorThrown = false;

async function fetchReplyById(
  replyId: string
): Promise<(typeof REPLIES)[0] | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (errorThrown && Math.random() < 0.5) {
    errorThrown = true;
    throw new Error("Failed to fetch reply data");
  }

  return REPLIES.find((reply) => reply.id === replyId);
}

const ReplyPreview = ({
  className,
  replyId,
  onRepliesClick,
}: ReplyPreviewProps) => {
  const { data: reply, status } = useQuery({
    queryKey: ["reply", replyId],
    queryFn: async () => fetchReplyById(replyId),
    enabled: !!replyId,
  });

  if (status === "pending") return <p>Loading reply...</p>;
  if (status === "error")
    return (
      <InlineNotification variant="destructive" className="bg-nested-card">
        <InlineNotificationTitle>
          Content couldn’t be loaded correctly
        </InlineNotificationTitle>
        <InlineNotificationDescription>
          Unable to load content. Please try again later.
        </InlineNotificationDescription>
      </InlineNotification>
    );

  if (!reply) return null;

  const { content, ...replyProps } = reply;

  return (
    <div
      className={cn("border-x border-border pl-8 bg-card last:pb-2", className)}
    >
      <div className="border-l border-primary">
        <ContentCard
          className={cn("rounded-none border-x-0 border-l border-y-0")}
          onRepliesClick={onRepliesClick}
          {...replyProps}
        >
          {content}
        </ContentCard>
      </div>
    </div>
  );
};

export { ReplyPreview };
