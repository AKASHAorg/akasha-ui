import * as React from "react";
import { faker } from "@faker-js/faker";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

const queryClient = new QueryClient();

const randomNumber = (min: number, max: number) =>
  faker.number.int({ min, max });

async function fetchServerPage(
  limit: number,
  offset: number = 0
): Promise<{ rows: Array<string>; nextOffset: number }> {
  const rows = new Array(limit)
    .fill(0)
    .map(() => faker.lorem.sentence(randomNumber(20, 70)));

  await new Promise((r) => setTimeout(r, 500));

  return { rows, nextOffset: offset + 1 };
}

function InfiniteScrollElement() {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: (ctx) => fetchServerPage(10, ctx.pageParam),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 0,
  });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

  return (
    <div className="**:data-[slot=infinite-scroll-container]:h-[400px] w-full">
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <InfiniteScroll
          count={allRows.length}
          estimatedHeight={50}
          overScan={5}
          gap={10}
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
              return <div>{allRows[index]}</div>;
            }}
          </InfiniteScrollList>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default function InfiniteScrollElementDemo() {
  return (
    <QueryClientProvider client={queryClient}>
      <InfiniteScrollElement />
    </QueryClientProvider>
  );
}
