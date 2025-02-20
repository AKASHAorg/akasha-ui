import * as React from "react";
import { faker } from "@faker-js/faker";

import {
  InfiniteScroll,
  InfiniteScrollList,
} from "@/registry/default/ui/infinite-scroll";

const randomNumber = (min: number, max: number) =>
  faker.number.int({ min, max });

const sentences = new Array(100)
  .fill(true)
  .map(() => faker.lorem.sentence(randomNumber(20, 70)));

export default function InfiniteScrollDemo() {
  return (
    <InfiniteScroll
      count={sentences.length}
      estimatedHeight={350}
      overScan={5}
      gap={10}
    >
      <InfiniteScrollList>
        {(index) => {
          return <div>{sentences[index]}</div>;
        }}
      </InfiniteScrollList>
    </InfiniteScroll>
  );
}
