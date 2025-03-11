"use client";

import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { EditorPlaceholder } from "@/registry/default/blocks/post-feed/components/editor-placeholder";
import { PostResolver } from "@/registry/default/blocks/post-feed/components/posts-resolver";
import { POSTS_STREAM } from "@/registry/default/blocks/post-feed/mock-data";
import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";
import { Stack } from "@/registry/default/ui/stack";

const queryClient = new QueryClient();

async function fetchPostsStream(
  limit: number,
  offset: number = 0
): Promise<{ ids: string[]; nextOffset: number }> {
  const startIndex = offset * limit;
  const endIndex = Math.min(startIndex + limit, POSTS_STREAM.length);
  const ids = POSTS_STREAM.slice(startIndex, endIndex).map((post) => post.id);

  return {
    ids,
    nextOffset: endIndex < POSTS_STREAM.length ? offset + 1 : -1,
  };
}

function Posts() {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["post-ids"],
    queryFn: (ctx) => fetchPostsStream(10, ctx.pageParam),
    getNextPageParam: (lastGroup) =>
      lastGroup.nextOffset === -1 ? undefined : lastGroup.nextOffset,
    initialPageParam: 0,
  });

  const postIds = data ? data.pages.flatMap((d) => d.ids) : [];

  return (
    <Stack
      spacing={4}
      className="p-4 **:data-[slot=infinite-scroll-container]:h-fit h-screen"
    >
      <EditorPlaceholder
        profileDID="did:pkh:eip155:11155111:0x1a4b3c567890abcdeffedcba1234567890abcdef"
        avatar={{ src: "https://github.com/akashaorg.png" }}
        cta="From your mind to the world. "
        actionLabel="Post Something"
        onClick={() => {
          console.log("Show beam editor");
        }}
      />
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <InfiniteScroll
          count={postIds.length}
          estimatedHeight={220}
          overScan={5}
          gap={16}
          loading={isFetchingNextPage}
          hasNextPage={hasNextPage}
          onLoadMore={() => {
            fetchNextPage();
          }}
          loadingIndicator="Loading ..."
          scrollElementType="element"
        >
          <InfiniteScrollList>
            {(index) => {
              const postId = postIds[index];
              return <PostResolver key={postId} postId={postId} />;
            }}
          </InfiniteScrollList>
        </InfiniteScroll>
      )}
    </Stack>
  );
}

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}
