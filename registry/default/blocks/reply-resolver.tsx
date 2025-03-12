import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Ellipsis } from "lucide-react";

import { REPLIES } from "@/registry/default/blocks/reply-mock-data";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";

import { cn } from "../lib/utils";
import { ReplyCard } from "./reply-card";
import { ReplyPreview } from "./reply-preview";

const MAXIMUM_REFLECTION_PREVIEWS = 2;

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

function ReplyResolver({ replyId, last }: { replyId: string; last: boolean }) {
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
  const repliesToReply = reply.replies;

  return (
    <>
      <ReplyCard
        {...replyProps}
        menu={{
          trigger: (
            <Ellipsis
              size={20}
              className="text-primary cursor-pointer hover:text-muted"
            />
          ),
          items: [
            { content: "Flag", onClick: () => console.log("flag") },
            {
              content: "Delete",
              onClick: () => console.log("delete"),
            },
            { content: "Edit", onClick: () => console.log("edit") },
          ],
        }}
        className={cn(last && "rounded-b-3xl")}
      >
        {content}
      </ReplyCard>

      {repliesToReply
        ?.slice(0, MAXIMUM_REFLECTION_PREVIEWS)
        .map((replyId) => (
          <ReplyPreview
            key={replyId}
            replyId={replyId}
            onRepliesClick={() => console.log("Not implemented")}
          />
        ))}
      {/* TODO - add load more buttons */}
    </>
  );
}

export { ReplyResolver, fetchReplyById };
