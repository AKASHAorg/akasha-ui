"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { ContentCard } from "./content-card";

type ReplyCardProps = React.ComponentProps<typeof ContentCard>;

const ReplyCard = ({ className, ...props }: ReplyCardProps) => {
  return (
    <>
      <ContentCard
        {...props}
        className={cn("rounded-b-none border-b-0 rounded-t-none ", className)}
      />
    </>
  );
};

export { ReplyCard };
