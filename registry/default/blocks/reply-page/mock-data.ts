import * as React from "react";

import { ContentCard } from "@/registry/default/blocks/content-card";

interface MockPost
  extends Omit<React.ComponentProps<typeof ContentCard>, "children"> {
  id: string;
  content: string;
}

const REPLY: MockPost = {
  id: "post1",
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "HangryMeow",
  },
  content:
    "5 cups a day? That’s not a coffee habit, that’s a legally binding relationship. Do you and coffee have anniversary plans? 😂",
  publishedAt: "30 mins ago",
  repliesCount: 2,
};

const REPLIES_TO_REPLY: (MockPost & {
  replies?: MockPost[];
})[] = [
  {
    id: "reply1",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content:
      "Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️",
    publishedAt: "5 mins ago",
    repliesCount: 0,
    nsfw: false,
  },
  {
    id: "reply2",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "At this point, coffee and I are practically married 😅",
    publishedAt: "5 mins ago",
    repliesCount: 0,
    nsfw: false,
  },
];

export { REPLY, REPLIES_TO_REPLY };
