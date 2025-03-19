import { ReplyCard } from "@/registry/default/blocks/social-content/reply-card";

interface MockPost
  extends Omit<React.ComponentProps<typeof ReplyCard>, "children"> {
  id: string;
  content: string;
}

const REPLIES_TO_REPLY: string[] = ["r00000000007", "r00000000008"];

const REPLIES: (MockPost & {
  replies?: string[];
})[] = [
  {
    id: "r00000000001",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "TeddythePug",
    },
    content:
      "Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️",
    publishedAt: "45 mins ago",
    repliesCount: 0,
  },
  {
    id: "r00000000002",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    content:
      "5 cups a day? That’s not a coffee habit, that’s a legally binding relationship. Do you and coffee have anniversary plans? 😂",
    publishedAt: "30 mins ago",
    repliesCount: REPLIES_TO_REPLY.length,

    replies: REPLIES_TO_REPLY,
  },
  {
    id: "r00000000003",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    content: "This is NSFW.",
    publishedAt: "30 mins ago",
    repliesCount: 1,
  },
  {
    id: "r00000000004",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "HangryMeow",
    },
    content:
      "5 cups a day? That’s not a coffee habit, that’s a legally binding relationship. Do you and coffee have anniversary plans? 😂",
    publishedAt: "30 mins ago",
    repliesCount: 2,
  },
  {
    id: "r00000000005",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content:
      "Tobi, you’re not drinking coffee—you’re fueling a NASA rocket launch. 🚀☕️",
    publishedAt: "5 mins ago",
    repliesCount: 0,
  },
  {
    id: "r00000000006",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "At this point, coffee and I are practically married 😅",
    publishedAt: "5 mins ago",
    repliesCount: 0,
  },
  {
    id: "r00000000007",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "Haha very funny.",
    publishedAt: "5 mins ago",

    repliesCount: 0,
  },
  {
    id: "r00000000008",
    author: {
      did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
      avatarSrc: "https://github.com/akashaorg.png",
      name: "CoffeeLover",
    },
    content: "At this point, coffee and I are practically married 😅",
    publishedAt: "5 mins ago",

    repliesCount: 0,
  },
];

export { REPLIES };
