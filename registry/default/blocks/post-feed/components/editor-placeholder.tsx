"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import {
  ProfileAvatar,
  ProfileAvatarFallback,
  ProfileAvatarImage,
} from "@/registry/default/ui/profile-avatar";
import { Stack } from "@/registry/default/ui/stack";
import { Typography } from "@/registry/default/ui/typography";

const EditorPlaceholder = ({
  avatar,
  profileDID,
  cta,
  actionLabel,
  className,
  ...props
}: {
  avatar: {
    src: string;
  };
  profileDID: string;
  cta: string;
  actionLabel: string;
} & React.ComponentProps<"div">) => {
  return (
    <Card
      className={cn("border-border bg-nested-card p-4", className)}
      {...props}
    >
      <Stack direction="row" alignItems="center" justifyContent="between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <ProfileAvatar profileDID={profileDID}>
            <ProfileAvatarImage src={avatar.src} alt="Profile avatar" />
            <ProfileAvatarFallback />
          </ProfileAvatar>
          <Typography variant="xs" bold>
            {cta}
          </Typography>
        </Stack>
        <Button size="sm">{actionLabel}</Button>
      </Stack>
    </Card>
  );
};

export { EditorPlaceholder };
