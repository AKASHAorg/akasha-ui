import * as React from "react";

import { Button } from "@/registry/default/ui/button";
import { FeedCTA } from "@/registry/default/ui/feed-cta";

export default function FeedCTADemo() {
  return (
    <div className="flex gap-4 flex-col w-full">
      <FeedCTA
        avatarSrc="https://github.com/shadcn.png"
        profileDID="did:web:example.com"
        cta="Follow"
      >
        <Button size="sm">Follow</Button>
      </FeedCTA>
    </div>
  );
}
