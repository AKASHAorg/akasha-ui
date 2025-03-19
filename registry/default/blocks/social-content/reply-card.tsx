"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

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
import { Typography } from "@/registry/default/ui/typography";

const ReplyCard = ({
  author,
  publishedAt,
  repliesCount,
  className,
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
  className?: string;
  children: React.ReactNode;
  onRepliesClick?: () => void;
}) => {
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
      <ContentCardBody>{children}</ContentCardBody>
      <ContentCardFooter className="justify-end">
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

export { ReplyCard };
