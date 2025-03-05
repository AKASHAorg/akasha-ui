import * as React from "react";
import { Ellipsis } from "lucide-react";

import { ContentCard } from "@/registry/default/blocks/content-card";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/default/ui/dropdown-menu";

import { ReplyCard } from "../reply-card";

const MENU = {
  trigger: (
    <Ellipsis
      size={20}
      className="text-primary cursor-pointer hover:text-muted-foreground"
    />
  ),
  items: [
    <DropdownMenuItem key="flag"> Flag </DropdownMenuItem>,
    <DropdownMenuItem key="delete"> Delete </DropdownMenuItem>,
    <DropdownMenuSeparator key="separator" />,
    <DropdownMenuItem key="edit"> Edit </DropdownMenuItem>,
  ],
};

const POST: React.ComponentProps<typeof ContentCard> = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "CoffeeLover",
  },
  children: (
    <>
      Hello, my name is Tobi, and I Love coffee.I drink about 5 cups of coffee
      per day.
    </>
  ),
  publishedAt: "1h ago",
  tags: ["AKASHA", "Coffee"],
  publishedVia: "Antenna",
  repliesCount: 5,
  nsfw: false,
  menu: MENU,
};

const REPLY_1: React.ComponentProps<typeof ContentCard> = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "TeddythePug",
  },
  children: (
    <>
      Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️
    </>
  ),
  publishedAt: "45 mins ago",
  repliesCount: 0,
  nsfw: false,
  menu: MENU,
};

const REPLIES_TO_REPLY_2 = [
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    children: <>Haha very funny.</>,
    publishedAt: "5 mins ago",
    nsfw: false,
    menu: MENU,
    repliesCount: 0,
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    children: <> At this point, coffee and I are practically married 😅</>,
    publishedAt: "5 mins ago",
    nsfw: false,
    menu: MENU,
    repliesCount: 0,
  },
];

const REPLY_2: React.ComponentProps<typeof ReplyCard> = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "HangryMeow",
  },
  children: (
    <>
      5 cups a day? That’s not a coffee habit, that’s a legally binding
      relationship. Do you and coffee have anniversary plans? 😂
    </>
  ),
  publishedAt: "30 mins ago",
  repliesCount: REPLIES_TO_REPLY_2.length,
  nsfw: false,
  menu: MENU,
  replies: REPLIES_TO_REPLY_2,
};

const REPLY_3: React.ComponentProps<typeof ReplyCard> = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "HangryMeow",
  },
  children: <>This is NSFW.</>,
  publishedAt: "30 mins ago",
  repliesCount: 1,
  nsfw: true,
  menu: MENU,
};

export { POST, REPLY_1, REPLY_2, REPLY_3 };
