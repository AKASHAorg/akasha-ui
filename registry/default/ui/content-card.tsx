"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/default/ui/card";
import {
  ProfileAvatarButton,
  ProfileAvatarButtonAvatar,
  ProfileAvatarButtonAvatarFallback,
  ProfileAvatarButtonAvatarImage,
  ProfileDidField,
  ProfileName,
} from "@/registry/default/ui/profile-avatar-button";
import { Typography } from "@/registry/default/ui/typography";

const ContentCard = ({
  author,
  publishedAt,
  className,
  children,
  ...props
}: {
  author: {
    did: string;
    name?: string;
    avatarSrc?: string;
  };
  publishedAt?: string;
} & React.ComponentProps<typeof Card>) => {
  return (
    <Card className={cn("p-4 w-full", className)} {...props}>
      <CardHeader>
        <ProfileAvatarButton profileDID={author.did}>
          <ProfileAvatarButtonAvatar>
            <ProfileAvatarButtonAvatarImage
              src={author.avatarSrc}
              alt={author.name}
            />
            <ProfileAvatarButtonAvatarFallback />
          </ProfileAvatarButtonAvatar>
          <ProfileName>
            {author.name}
            {publishedAt && (
              <Typography
                variant="xs"
                className="text-muted-foreground font-normal"
              >
                {" "}
                · {publishedAt}
              </Typography>
            )}
          </ProfileName>
          <ProfileDidField />
        </ProfileAvatarButton>
        {React.Children.toArray(children).find(
          (child) =>
            React.isValidElement(child) && child.type === ContentCardAction
        )}
      </CardHeader>
      {React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ContentCardBody
      )}
      {React.Children.toArray(children).find(
        (child) =>
          React.isValidElement(child) && child.type === ContentCardFooter
      )}
    </Card>
  );
};

const ContentCardAction = (props: React.ComponentProps<typeof CardAction>) => {
  return <CardAction {...props} />;
};

const ContentCardBody = ({
  className,
  ...props
}: React.ComponentProps<typeof CardContent>) => {
  return (
    <CardContent className={cn("justify-start w-full", className)} {...props} />
  );
};

const ContentCardFooter = ({
  className,
  ...props
}: React.ComponentProps<typeof CardFooter>) => {
  return <CardFooter className={cn("justify-between", className)} {...props} />;
};

export { ContentCard, ContentCardAction, ContentCardBody, ContentCardFooter };
