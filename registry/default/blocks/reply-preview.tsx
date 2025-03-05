"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { ContentCard } from "./content-card";

type ReplyPreviewProps = React.ComponentProps<typeof ContentCard>;

const ReplyPreview = ({ className, ...props }: ReplyPreviewProps) => {
  return (
    <div
      className={cn("border-x border-border pl-8 bg-card last:pb-2", className)}
    >
      <div className="border-l border-primary">
        <ContentCard
          {...props}
          className={cn("rounded-none border-x-0 border-l border-y-0")}
        />
      </div>
    </div>
  );
};

export { ReplyPreview };
