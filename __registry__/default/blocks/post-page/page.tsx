import * as React from "react";

import Post, {
  PostProps,
} from "@/registry/default/blocks/post-page/components/post";

const POST_MOCK_DATA: PostProps = {
  title: "",
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatar: "https://github.com/akashaorg.png",
    name: "CoffeeLover",
  },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  publishedAt: "5 mins ago",
  tags: ["AKASHA", "AKASHA"],
  publishedVia: "Antenna",
  commentCount: 5,
  isDelisted: true,
  isNsfw: true,
  isAppNotInstalled: false,
  isCouldNotLoad: false,
};

export default function Page() {
  return <Post {...POST_MOCK_DATA} variant="page" />;
}
