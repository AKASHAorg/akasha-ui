import * as React from "react";

import { ContentCard } from "@/registry/default/blocks/content-card";

import { ReplyCard } from "../reply-card";

const POST: React.ComponentProps<typeof ContentCard> = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "CoffeeLover",
  },
  children:
    "Hello, my name is Tobi, and I Love coffee.I drink about 5 cups of coffee per day.",
  publishedAt: "1h ago",
  tags: ["AKASHA", "Coffee"],
  publishedVia: "Antenna",
  repliesCount: 5,
  nsfw: false,
};

const REPLIES_TO_REPLY = [
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    children: "Haha very funny.",
    publishedAt: "5 mins ago",
    nsfw: false,

    repliesCount: 0,
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    children: "At this point, coffee and I are practically married 😅",
    publishedAt: "5 mins ago",
    nsfw: false,

    repliesCount: 0,
  },
];

const REPLIES: (React.ComponentProps<typeof ReplyCard> & {
  replies?: React.ComponentProps<typeof ContentCard>[];
})[] = [
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "TeddythePug",
    },
    children:
      "Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️",
    publishedAt: "45 mins ago",
    repliesCount: 0,
    nsfw: false,
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    children:
      "5 cups a day? That’s not a coffee habit, that’s a legally binding relationship. Do you and coffee have anniversary plans? 😂",
    publishedAt: "30 mins ago",
    repliesCount: REPLIES_TO_REPLY.length,
    nsfw: false,

    replies: REPLIES_TO_REPLY,
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    children: "This is NSFW.",
    publishedAt: "30 mins ago",
    repliesCount: 1,
    nsfw: true,
  },
];

export { POST, REPLIES };
