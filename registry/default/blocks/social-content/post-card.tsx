"use client";

import * as React from "react";
import { MessageCircle, SatelliteDish } from "lucide-react";

import { NsfwWarning } from "@/registry/default/blocks/social-content/post-page/components/nsfw-warning";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  ContentCard,
  ContentCardAction,
  ContentCardBody,
  ContentCardFooter,
} from "@/registry/default/ui/content-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { IconContainer } from "@/registry/default/ui/icon-container";
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

const PostCard = ({
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
}: {
  author: {
    did: string;
    avatarSrc?: string;
    name?: string;
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
}) => {
  const [showNsfw, setShowNsfw] = React.useState(nsfw);

  return (
    <ContentCard
      author={author}
      publishedAt={publishedAt}
      className={className}
    >
      <ContentCardAction>
        {menu && (
          <DropdownMenu>
            <DropdownMenuTrigger>{menu.trigger}</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
      </ContentCardAction>
      <ContentCardBody>
        {showNsfw ? (
          <NsfwWarning
            onShowClick={() => setShowNsfw(!showNsfw)}
            title="Content Warning: Not Safe Work"
            description="The post author marked this post as NSFW"
          />
        ) : (
          <Stack spacing={4}>
            {children}
            {tags && (
              <Stack direction="row" spacing={2}>
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-secondary"
                  >
                    <Typography variant="xs" className="font-normal">
                      {tag}
                    </Typography>
                  </Badge>
                ))}
              </Stack>
            )}
          </Stack>
        )}
      </ContentCardBody>
      <ContentCardFooter>
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
          onClick={onRepliesClick}
          className="border-none bg-transparent pr-0"
        >
          <MessageCircle size={16} className="text-primary" />
          {repliesCount > 0 && (
            <Typography variant="xs" className="font-bold text-primary">
              {repliesCount}
            </Typography>
          )}
        </Button>
      </ContentCardFooter>
    </ContentCard>
  );
};

export { PostCard };
