import * as React from "react";

import { PostCard } from "@/registry/default/blocks/social-content/post-card";

interface MockPost
  extends Omit<React.ComponentProps<typeof PostCard>, "children"> {
  id: string;
  content: string;
}

const POST: MockPost = {
  id: "post1",
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "CoffeeLover",
  },
  content:
    "Hello, my name is Tobi, and I Love coffee.I drink about 5 cups of coffee per day.",
  publishedAt: "1h ago",
  tags: ["AKASHA", "Coffee"],
  publishedVia: "Antenna",
  repliesCount: 5,
  nsfw: true,
};

const REPLIES_STREAM = [
  { id: "r00000000001", createdAt: "2025-03-11T18:00:00Z" },
  { id: "r00000000002", createdAt: "2025-03-11T17:00:00Z" },
  { id: "r00000000003", createdAt: "2025-03-11T16:00:00Z" },
];

export { POST, REPLIES_STREAM };
