"use client";

import * as React from "react";
import { Ellipsis } from "lucide-react";

import Post, {
  PostProps,
} from "@/registry/default/blocks/post-page/components/post";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/default/ui/dropdown-menu";

const POST_MOCK_DATA: PostProps = {
  author: {
    did: "did:pkh:eip155:11155111:0x8a022905463998860516390fb27548479a098b95",
    avatarSrc: "https://github.com/akashaorg.png",
    name: "CoffeeLover",
  },
  children: (
    <>
      &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      quos.&quot;
    </>
  ),
  publishedAt: "5 mins ago",
  tags: ["AKASHA", "WEB3"],
  publishedVia: "Antenna",
  repliesCount: 5,
  nsfw: false,
  menu: {
    trigger: (
      <Ellipsis
        size={20}
        className="text-primary cursor-pointer hover:text-muted-foreground"
      />
    ),
    items: [
      <DropdownMenuItem key="flag">Flag</DropdownMenuItem>,
      <DropdownMenuItem key="delete">Delete</DropdownMenuItem>,
      <DropdownMenuSeparator key="separator" />,
      <DropdownMenuItem key="edit">Edit</DropdownMenuItem>,
    ],
  },
};

export default function Page() {
  return (
    <div className="p-4">
      <Post
        {...POST_MOCK_DATA}
        onRepliesButtonClick={() => {
          console.log("Clicked on replies button");
        }}
        
      />
    </div>
  );
}
