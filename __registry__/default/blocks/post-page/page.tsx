"use client";

import * as React from "react";

import { ContentCard } from "@/registry/default/blocks/content-card";
import { Card } from "@/registry/default/ui/card";
import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

import { ReplyCard } from "../reply-card";
import { ReplyEditor } from "../reply-editor";
import { POST, REPLIES } from "./mock-data";

export default function Page() {
  return (
    <div className="p-4 h-full">
      <ContentCard
        key={0}
        {...POST}
        onRepliesClick={() => {
          console.log("Not implemented");
        }}
        className="rounded-b-none"
      />
      ,
      <Card className="border-y-0 p-2 rounded-none" key={1}>
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
            return <ReplyCard {...reply} className="rounded-none" />;
          }}
        </InfiniteScrollList>
      </InfiniteScroll>
    </div>
  );
}
