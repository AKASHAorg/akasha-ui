"use client";

import * as React from "react";
import { Fragment } from "react";
import { Ellipsis } from "lucide-react";

import { ContentCard } from "@/registry/default/blocks/content-card";
import { Card } from "@/registry/default/ui/card";
import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

import { cn } from "../../../../lib/utils";
import { ReplyCard } from "../reply-card";
import { ReplyEditor } from "../reply-editor";
import { ReplyPreview } from "../reply-preview";
import { POST, REPLIES } from "./mock-data";

const MAXIMUM_REFLECTION_PREVIEWS = 2;

export default function Page() {
  const { content, ...postProps } = POST;
  return (
    <div className="p-4 h-full">
      <ContentCard
        {...postProps}
        onRepliesClick={() => {
          console.log("Not implemented");
        }}
        className="rounded-b-none"
        menu={{
          trigger: (
            <Ellipsis
              size={20}
              className="text-primary cursor-pointer hover:text-muted"
            />
          ),
          items: [
            { label: "Flag", onItemClick: () => console.log("flag") },
            { label: "Delete", onItemClick: () => console.log("delete") },
            { label: "Edit", onItemClick: () => console.log("edit") },
          ],
        }}
      >
        {content}
      </ContentCard>
      <Card className="border-t-0 p-2 rounded-none" key={1}>
        <ReplyEditor
          avatarSrc={"https://github.com/akashaorg.png"}
          onReplyClick={() => {
            console.log("Not implemented");
          }}
        />
      </Card>
      <InfiniteScroll
        count={REPLIES.length}
        estimatedHeight={220}
        overScan={5}
        gap={0}
        loading={false}
        hasNextPage={false}
        scrollElementType="window"
      >
        <InfiniteScrollList>
          {(index) => {
            const reply = REPLIES[index];
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
                        className="text-primsary cursor-pointer hover:text-muted"
                      />
                    ),
                    items: [
                      { label: "Flag", onItemClick: () => console.log("flag") },
                      {
                        label: "Delete",
                        onItemClick: () => console.log("delete"),
                      },
                      { label: "Edit", onItemClick: () => console.log("edit") },
                    ],
                  }}
                  className={cn(
                    "rounded-none",
                    index === 0 && "border-t-0",
                    index === REPLIES.length - 1 && "rounded-b-3xl"
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
