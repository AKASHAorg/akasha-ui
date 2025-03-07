"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { ContentCard } from "./content-card";

type ReplyCardProps = Omit<
  React.ComponentProps<typeof ContentCard>,
  "tags" | "publishedVia"
>;

const ReplyCard = ({ className, ...props }: ReplyCardProps) => {
  return (
    <ContentCard
      {...props}
      className={cn("border-t-0 rounded-none", className)}
    />
  );
};

export { ReplyCard };
