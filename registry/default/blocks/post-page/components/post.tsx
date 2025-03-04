"use client";

import * as React from "react";
import { MessageCircle, SatelliteDish } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
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

import NsfwWarning from "./nsfw-warning";

export interface PostProps {
  author: {
    did: string;
    avatarSrc: string;
    name: string;
  };
  publishedAt: string;
  publishedVia: string;
  repliesCount: number;
  menu?: {
    trigger: React.ReactNode;
    items: React.ReactNode[];
  };
  tags?: string[];
  variant?: "feed" | "page";
  nsfw?: boolean;
  className?: string;
  children: React.ReactNode;
  onRepliesButtonClick?: () => void;
}

const Post = ({
  author,
  publishedAt,
  tags,
  publishedVia,
  repliesCount,
  className,
  nsfw,
  menu,
  children,
  onRepliesButtonClick,
}: PostProps) => {
  const [showNsfw, setShowNsfw] = React.useState(nsfw);

  return (
    <Card className={cn("p-4", className)}>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" justifyContent={"between"}>
          <ProfileAvatarButton profileDID={author.did}>
            <ProfileAvatarButtonAvatar>
              <ProfileAvatarButtonAvatarImage
                src={author.avatarSrc}
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
          {menu && (
            <DropdownMenu>
              <DropdownMenuTrigger>{menu.trigger}</DropdownMenuTrigger>
              <DropdownMenuContent>{menu.items}</DropdownMenuContent>
            </DropdownMenu>
          )}
        </Stack>

        {showNsfw ? (
          <NsfwWarning onShowClick={() => setShowNsfw(!showNsfw)} />
        ) : (
          children
        )}

        {tags && (
          <Stack direction="row" spacing={2}>
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-secondary">
                <Typography variant="xs" className="font-normal">
                  {tag}
                </Typography>
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
            onClick={onRepliesButtonClick}
            className="border-none bg-transparent pr-0"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <MessageCircle size={16} className="text-primary" />
              <Typography variant="xs" className="font-bold text-primary">
                {repliesCount}
              </Typography>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Post;
