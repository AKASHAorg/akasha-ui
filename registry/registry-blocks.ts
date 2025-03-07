import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "post-page",
    type: "registry:block",
    description:
      "A single post page with reply editor and replies and nested reply previews",
    registryDependencies: [
      "custom/profile-avatar-button",
      "custom/card",
      "custom/stack",
      "custom/typography",
      "custom/icon-container",
      "custom/button",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/post-page/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/content-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/nsfw-warning.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/post-page/mock-data.ts",
        type: "registry:component",
      },
    ],
    categories: ["post-page"],
  },
  {
    name: "reply-page",
    type: "registry:block",
    description: "A reply post page with reply editor and replies",
    registryDependencies: [
      "custom/profile-avatar-button",
      "custom/card",
      "custom/stack",
      "custom/typography",
      "custom/icon-container",
      "custom/button",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/reply-page/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/content-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/nsfw-warning.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-page/mock-data.ts",
        type: "registry:component",
      },
    ],
    categories: ["reply-page"],
  },
];
