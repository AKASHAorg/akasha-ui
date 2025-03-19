"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

import { NsfwWarning } from "@/registry/default/blocks/nsfw-warning";
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
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

const ReplyCard = ({
  author,
  publishedAt,
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
  menu?: {
    trigger: React.ReactNode;
    items: {
      content: React.ReactNode;
      className?: string;
      onClick?: () => void;
    }[];
  };
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
      </ContentCardAction>
      <ContentCardBody>
        {showNsfw ? (
          <NsfwWarning
            onShowClick={() => setShowNsfw(!showNsfw)}
            title="Content Warning: Not Safe Work"
            description="The post author marked this post as NSFW"
          />
        ) : (
          children
        )}
      </ContentCardBody>
      <ContentCardFooter className="justify-end">
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
      </ContentCardFooter>
    </ContentCard>
  );
};

export { ReplyCard };
