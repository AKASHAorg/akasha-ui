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
      "custom/feed-cta",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/social-content/post-feed/page.tsx",
        type: "registry:page",
        target: "app/post-feed/page.tsx",
      },
      {
        path: "blocks/social-content/post-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/post-feed/components/posts-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/post-feed/mock-data.ts",
        type: "registry:file",
        target: "app/post-feed/mock-data.ts",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["social-content"],
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
    dependencies: ["social-content"],
    files: [
      {
        path: "blocks/social-content/post-page/page.tsx",
        type: "registry:page",
        target: "app/post/page.tsx",
      },
      {
        path: "blocks/social-content/post-page/mock-data.ts",
        type: "registry:file",
        target: "app/post/mock-data.ts",
      },
      {
        path: "blocks/social-content/post-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-preview.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
      },
      {
        path: "blocks/social-content/post-page/components/nsfw-warning.tsx",
        type: "registry:component",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["social-content"],
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
    dependencies: ["social-content"],
    files: [
      {
        path: "blocks/social-content/reply-page/page.tsx",
        type: "registry:page",
        target: "app/post/page.tsx",
      },
      {
        path: "blocks/social-content/reply-page/mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
      },
      {
        path: "blocks/social-content/reply-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-resolver.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-preview.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/social-content/reply-mock-data.ts",
        type: "registry:file",
        target: "app/reply/mock-data.ts",
      },
      {
        path: "lib/format-relative-time.ts",
        type: "registry:lib",
      },
    ],
    categories: ["social-content"],
  },
];
