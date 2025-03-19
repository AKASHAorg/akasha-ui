"use client";

import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { Ellipsis } from "lucide-react";

import { cn } from "@/lib/utils";
import { ReplyCard } from "@/registry/default/blocks/social-content/reply-card";
import { ReplyEditor } from "@/registry/default/blocks/social-content/reply-editor";
import {
  REPLIES_STREAM,
  REPLY,
} from "@/registry/default/blocks/social-content/reply-page/mock-data";
import { ReplyResolver } from "@/registry/default/blocks/social-content/reply-resolver";
import { Card } from "@/registry/default/ui/card";
import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

const queryClient = new QueryClient();

async function fetchRepliesStream(
  limit: number,
  offset: number = 0
): Promise<{ ids: string[]; nextOffset: number }> {
  const startIndex = offset * limit;
  const endIndex = Math.min(startIndex + limit, REPLIES_STREAM.length);
  const ids = REPLIES_STREAM.slice(startIndex, endIndex).map((post) => post.id);

  return {
    ids,
    nextOffset: endIndex < REPLIES_STREAM.length ? offset + 1 : -1,
  };
}

function Replies() {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["post-ids"],
    queryFn: (ctx) => fetchRepliesStream(10, ctx.pageParam),
    getNextPageParam: (lastGroup) =>
      lastGroup.nextOffset === -1 ? undefined : lastGroup.nextOffset,
    initialPageParam: 0,
  });

  const replyIds = data ? data.pages.flatMap((d) => d.ids) : [];

  const { content, ...replyProps } = REPLY;
  return (
    <div className="p-4 h-full">
      <ReplyCard
        onRepliesClick={() => {
          console.log("Not implemented");
        }}
        className="border-b-none rounded-b-none"
        menu={{
          trigger: (
            <Ellipsis size={20} className="text-primary hover:text-muted" />
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
        {...replyProps}
      >
        {content}
      </ReplyCard>
      <Card className="border-y-0 p-2 rounded-none">
        <ReplyEditor
          avatarSrc={"https://github.com/akashaorg.png"}
          onReplyClick={() => {
            console.log("Not implemented");
          }}
        />
      </Card>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <InfiniteScroll
          count={replyIds.length}
          estimatedHeight={220}
          overScan={5}
          gap={0}
          loading={isFetchingNextPage}
          hasNextPage={hasNextPage}
          onLoadMore={() => {
            fetchNextPage();
          }}
          loadingIndicator="Loading ..."
          scrollElementType="window"
        >
          <InfiniteScrollList>
            {(index) => {
              const replyId = replyIds[index];
              return (
                <ReplyResolver
                  key={replyId}
                  replyId={replyId}
                  className={cn(
                    index === replyIds.length - 1
                      ? "rounded-t-none"
                      : "rounded-none border-b-0"
                  )}
                />
              );
            }}
          </InfiniteScrollList>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Replies />
    </QueryClientProvider>
  );
}
