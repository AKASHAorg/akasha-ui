import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "post-page",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
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
        path: "blocks/post-page/reply-editor.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/post-page/mock-data.tsx",
        type: "registry:component",
      },
    ],
    categories: ["post-page"],
  },
];
