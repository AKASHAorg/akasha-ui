import * as React from "react";

import { Button } from "@/registry/default/ui/button";
import { FeedCTA } from "@/registry/default/ui/feed-cta";

export default function FeedCTADemo() {
  return (
    <div className="flex gap-4 flex-col w-full">
      <FeedCTA
        avatarSrc="https://github.com/akashaorg.png"
        profileDID="did:pkh:eip155:11155111:0x1a4b3c567890abcdeffedcba1234567890abcdef"
        cta="From your mind to the world."
      >
        <Button size="sm">Post Something</Button>
      </FeedCTA>
    </div>
  );
}
