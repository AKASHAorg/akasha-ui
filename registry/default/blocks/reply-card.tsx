"use client";

import * as React from "react";

import { ContentCard } from "./content-card";

interface ReplyCardProps extends React.ComponentProps<typeof ContentCard> {
  replies?: React.ComponentProps<typeof ContentCard>[];
}

const ReplyCard = ({ replies, ...props }: ReplyCardProps) => {
  return (
    <>
      <ContentCard
        {...props}
        className="rounded-b-none border-b-0 rounded-t-none"
      />
      {replies && (
        <div className="border-x border-border pl-8 pb-2 bg-card">
          {/* Reply previews */}
          <div className="border-l border-primary">
            {replies?.map((reply, index) => (
              <ContentCard
                {...reply}
                onRepliesClick={() => {
                  console.log("Clicked on replies button");
                }}
                className="rounded-none border-x-0 border-l border-y-0"
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { ReplyCard };
