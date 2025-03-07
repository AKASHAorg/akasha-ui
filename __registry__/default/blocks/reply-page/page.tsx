"use client";

import * as React from "react";
import { Fragment } from "react";
import { Ellipsis } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/registry/default/ui/card";
import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

import { ReplyCard } from "../reply-card";
import { ReplyEditor } from "../reply-editor";
import { ReplyPreview } from "../reply-preview";
import { REPLIES_TO_REPLY, REPLY } from "./mock-data";

const MAXIMUM_REFLECTION_PREVIEWS = 2;

export default function Page() {
  const { content, ...replyProps } = REPLY;
  return (
    <div className="p-4 h-full">
      <ReplyCard
        {...replyProps}
        onRepliesClick={() => {
          console.log("Not implemented");
        }}
        className="rounded-t-3xl border-t"
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
              className: "text-destructive",
              onClick: () => console.log("delete"),
            },
            { content: "Edit", onClick: () => console.log("edit") },
          ],
        }}
      >
        {content}
      </ReplyCard>
      <Card className="border-t-0 p-2 rounded-none" key={1}>
        <ReplyEditor
          avatarSrc={"https://github.com/akashaorg.png"}
          onReplyClick={() => {
            console.log("Not implemented");
          }}
        />
      </Card>
      <InfiniteScroll
        count={REPLIES_TO_REPLY.length}
        estimatedHeight={220}
        overScan={5}
        gap={0}
        scrollElementType="window"
      >
        <InfiniteScrollList>
          {(index) => {
            const reply = REPLIES_TO_REPLY[index];
            const { content, id, ...replyProps } = reply;
            const repliesToReply = reply.replies;

            return (
              <Fragment key={id}>
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
                  className={cn(
                    index === REPLIES_TO_REPLY.length - 1 && "rounded-b-3xl"
                  )}
                >
                  {content}
                </ReplyCard>

                {repliesToReply
                  ?.slice(0, MAXIMUM_REFLECTION_PREVIEWS)
                  .map(({ content, id, ...replyProps }) => (
                    <ReplyPreview
                      {...replyProps}
                      key={id}
                      onRepliesClick={() => {
                        console.log("Clicked on replies button");
                      }}
                    >
                      {content}
                    </ReplyPreview>
                  ))}
                {/* TODO - add load more buttons */}
              </Fragment>
            );
          }}
        </InfiniteScrollList>
      </InfiniteScroll>
    </div>
  );
}
