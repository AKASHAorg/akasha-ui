import * as React from "react";
import { ReactNode } from "react";

import { ContentCard } from "@/registry/default/blocks/content-card";

interface MockPost
  extends Omit<React.ComponentProps<typeof ContentCard>, "children"> {
  id: string;
  content: ReactNode;
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
  nsfw: false,
};

const REPLIES_TO_REPLY: MockPost[] = [
  {
    id: "relply4",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "Haha very funny.",
    publishedAt: "5 mins ago",
    nsfw: false,

    repliesCount: 0,
  },
  {
    id: "reply5",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "At this point, coffee and I are practically married 😅",
    publishedAt: "5 mins ago",
    nsfw: false,

    repliesCount: 0,
  },
];

const REPLIES: (MockPost & {
  replies?: MockPost[];
})[] = [
  {
    id: "reply1",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "TeddythePug",
    },
    content:
      "Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️",
    publishedAt: "45 mins ago",
    repliesCount: 0,
    nsfw: false,
  },
  {
    id: "reply2",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    content:
      "5 cups a day? That’s not a coffee habit, that’s a legally binding relationship. Do you and coffee have anniversary plans? 😂",
    publishedAt: "30 mins ago",
    repliesCount: REPLIES_TO_REPLY.length,
    nsfw: false,

    replies: REPLIES_TO_REPLY,
  },
  {
    id: "reply3",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    content: "This is NSFW.",
    publishedAt: "30 mins ago",
    repliesCount: 1,
    nsfw: true,
  },
];

export { POST, REPLIES };
