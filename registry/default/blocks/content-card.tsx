"use client";

import * as React from "react";
import { MessageCircle, SatelliteDish } from "lucide-react";

import { cn } from "@/lib/utils";
import { NsfwWarning } from "@/registry/default/blocks/nsfw-warning";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

interface ContentCardProps {
  author: {
    did: string;
    avatarSrc: string;
    name: string;
  };
  publishedAt: string;
  repliesCount: number;
  publishedVia?: string;
  menu?: {
    trigger: React.ReactNode;
    items: {
      content: React.ReactNode;
      className?: string;
      onClick?: () => void;
    }[];
  };
  tags?: string[];
  nsfw?: boolean;
  className?: string;
  children: React.ReactNode;
  onRepliesClick?: () => void;
}

const ContentCard = ({
  author,
  publishedAt,
  tags,
  publishedVia,
  repliesCount,
  className,
  nsfw,
  menu,
  children,
  onRepliesClick,
}: ContentCardProps) => {
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
              <DropdownMenuContent>
                {menu?.items.map(({ content, className, onClick }, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={onClick}
                    className={className}
                  >
                    {content}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </Stack>

        {showNsfw ? (
          <NsfwWarning
            onShowClick={() => setShowNsfw(!showNsfw)}
            title="Content Warning: Not Safe Work"
            description="The post author marked this post as NSFW"
          />
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
            {publishedVia && (
              <>
                <IconContainer size="xs" variant="round">
                  <SatelliteDish className="text-primary" size={12} />
                </IconContainer>

                <Typography variant="xs" className="text-muted-foreground">
                  Published via {publishedVia}
                </Typography>
              </>
            )}
          </Stack>

          <Button
            asChild
            onClick={onRepliesClick}
            className="border-none bg-transparent pr-0"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <MessageCircle size={16} className="text-primary" />
              {repliesCount > 0 && (
                <Typography variant="xs" className="font-bold text-primary">
                  {repliesCount}
                </Typography>
              )}
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export { ContentCard };
