import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Ellipsis } from "lucide-react";

import { PostCard } from "@/registry/default/blocks/social-content/post-card";
import { POSTS } from "@/registry/default/blocks/social-content/post-feed/mock-data";
import { formatRelativeTime } from "@/registry/default/lib/format-relative-time";
import { Image } from "@/registry/default/ui/image";
import {
  InlineNotification,
  InlineNotificationDescription,
  InlineNotificationTitle,
} from "@/registry/default/ui/inline-notification";
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

let errorThrown = false;

async function fetchPostById(postId: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (errorThrown && Math.random() < 0.5) {
    errorThrown = true;
    throw new Error("Failed to fetch post data");
  }

  return POSTS.find((post) => post.id === postId);
}

function PostResolver({ postId }: { postId: string }) {
  const { data: post, status } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => fetchPostById(postId),
    enabled: !!postId,
  });

  if (status === "pending") return <p>Loading post...</p>;
  if (status === "error")
    return (
      <InlineNotification variant="destructive" className="bg-nested-card">
        <InlineNotificationTitle>
          Content couldn’t be loaded correctly
        </InlineNotificationTitle>
        <InlineNotificationDescription>
          Unable to load content. Please try again later.
        </InlineNotificationDescription>
      </InlineNotification>
    );

  return (
    post && (
      <PostCard
        author={post.author}
        publishedAt={formatRelativeTime(post.createdAt)}
        publishedVia={post.publishedVia}
        repliesCount={post.repliesCount}
        onRepliesClick={() => {
          console.log("Reply to a post");
        }}
        menu={{
          trigger: (
            <Ellipsis size={20} className="text-primary hover:text-muted" />
          ),
          items: [{ content: "Flag", onClick: () => console.log("flag") }],
        }}
      >
        <Stack spacing={4}>
          {post.contents.map((content, index) => (
            <React.Fragment key={index}>
              {content.type === "image" && (
                <Image
                  src={content.value}
                  alt="image"
                  showLoadingIndicator={true}
                />
              )}
              {content.type === "text" && (
                <Typography key={index} variant="p">
                  {content.value}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </PostCard>
    )
  );
}

export { PostResolver };
