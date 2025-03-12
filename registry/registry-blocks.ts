import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "post-feed",
    type: "registry:block",
    description: "A post-feed page displaying a list of posts.",
    registryDependencies: [
      "custom/profile-avatar",
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
        path: "blocks/post-feed/page.tsx",
        type: "registry:page",
        target: "app/post-feed/page.tsx",
      },
      {
        path: "blocks/content-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/post-feed/components/editor-placeholder.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/post-feed/components/posts-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/post-feed/mock-data.ts",
        type: "registry:file",
        target: "app/post-feed/mock-data.ts",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["post-feed"],
  },
  {
    name: "post-page",
    type: "registry:block",
    description: "A post page displaying the main post along with its replies.",
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
        target: "app/post/page.tsx",
      },
      {
        path: "blocks/post-page/mock-data.ts",
        type: "registry:file",
        target: "app/post/mock-data.ts",
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
        path: "blocks/reply-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-preview.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
      },
      {
        path: "blocks/nsfw-warning.tsx",
        type: "registry:component",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["post"],
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
        target: "app/post/page.tsx",
      },
      {
        path: "blocks/reply-page/mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
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
        path: "blocks/reply-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-preview.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/reply-mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
      },
      {
        path: "blocks/nsfw-warning.tsx",
        type: "registry:component",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["reply-page"],
  },
];
