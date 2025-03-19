import { Ellipsis, MessageCircle, SatelliteDish } from "lucide-react";

import { formatRelativeTime } from "@/registry/default/lib/format-relative-time";
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

export default function ContentCardDemo() {
  return (
    <ContentCard
      author={{
        did: "did:pkh:eip155:11155111:0x1a4b3c567890abcdeffedcba1234567890abcdef",
        name: "CoffeLover",
        avatarSrc: "https://github.com/akashaorg.png",
      }}
      publishedAt={formatRelativeTime("2025-02-28T06:26:53.092058Z")}
    >
      <ContentCardAction>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={20} className="text-primary hover:text-muted" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                console.log("Flag content");
              }}
            >
              Flag
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ContentCardAction>
      <ContentCardBody>This is a sample post ...</ContentCardBody>
      <ContentCardFooter>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconContainer size="xs" variant="round">
            <SatelliteDish className="text-primary" size={12} />
          </IconContainer>

          <Typography variant="xs" className="text-muted-foreground">
            Published via Antenna
          </Typography>
        </Stack>
        <Button
          asChild
          onClick={() => {
            console.log("Reply to the post");
          }}
          className="border-none bg-transparent pr-0"
        >
          <MessageCircle size={16} className="text-primary" />
        </Button>
      </ContentCardFooter>
    </ContentCard>
  );
}
