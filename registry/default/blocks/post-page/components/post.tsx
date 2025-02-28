"use client";

import * as React from "react";
import { Ellipsis, MessageCircle, SatelliteDish } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import { IconContainer } from "@/registry/default/ui/icon-container";
import {
  ProfileAvatarButton,
  ProfileAvatarButtonAvatar,
  ProfileAvatarButtonAvatarFallback,
  ProfileAvatarButtonAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

export interface PostProps extends React.ComponentProps<typeof Card> {
  title: string;
  author: {
    did: string;
    avatar: string;
    name: string;
  };
  content: string;
  publishedAt: string;
  tags: string[];
  publishedVia: string;
  commentCount: number;
  variant?: "feed" | "page";
}

const Post = ({
  author,
  content,
  publishedAt,
  tags,
  publishedVia,
  commentCount,
  variant = "feed",
  className,
}: PostProps) => {
  const onEllipsisClick = () => {
    alert("ellipsis");
  };

  const onMessageClick = () => {
    alert("message");
  };

  const isPageVariant = variant === "page";

  return (
    <Card
      className={(cn("p-4", { "rounded-b-none": isPageVariant }), className)}
    >
      <Stack direction="column" spacing={4}>
        <Stack direction="row" justifyContent={"between"}>
          <ProfileAvatarButton profileDID={author.did}>
            <ProfileAvatarButtonAvatar>
              <ProfileAvatarButtonAvatarImage
                src={author.avatar}
                alt={`@${author.name}`}
              />
              <ProfileAvatarButtonAvatarFallback />
            </ProfileAvatarButtonAvatar>
            <ProfileName>
              {author.name}{" "}
              <Typography
                variant="xs"
                className="text-muted-foreground font-normal"
              >
                · {publishedAt}
              </Typography>
            </ProfileName>
            <ProfileDidField />
          </ProfileAvatarButton>
          <Button
            asChild
            onClick={onEllipsisClick}
            className="border-none bg-transparent text-primary"
          >
            <Ellipsis size={20} />
          </Button>
        </Stack>
        <Typography variant="p">{content}</Typography>
        {isPageVariant && (
          <Stack direction="row" spacing={2}>
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                <Typography variant="xs">{tag}</Typography>
              </Badge>
            ))}
          </Stack>
        )}
        <Stack direction="row" spacing={2} justifyContent="between">
          <Stack direction="row" spacing={1} alignItems="center">
            <IconContainer size="xs" variant="round">
              <SatelliteDish className="text-primary" size={12} />
            </IconContainer>
            <Typography variant="xs" className="text-muted-foreground">
              Published via {publishedVia}
            </Typography>
          </Stack>

          <Button
            asChild
            onClick={onMessageClick}
            className="border-none bg-transparent"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <MessageCircle size={16} className="text-primary" />
              <Typography variant="xs" className="font-bold text-primary">
                {commentCount}
              </Typography>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Post;
