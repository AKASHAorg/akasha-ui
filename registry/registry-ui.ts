import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "auto-complete",
    type: "registry:ui",
    dependencies: undefined,
    files: [
      {
        path: "akasha-ui/auto-complete.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "duplex-button",
    type: "registry:ui",
    dependencies: [],
    files: [
      {
        path: "akasha-ui/duplex-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "icon-container",
    type: "registry:ui",
    dependencies: [],
    files: [
      {
        path: "akasha-ui/icon-container.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "image",
    type: "registry:ui",
    dependencies: ["next"],
    files: [
      {
        path: "akasha-ui/image.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "profile-avatar",
    type: "registry:ui",
    files: [
      {
        path: "akasha-ui/profile-avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "stack",
    type: "registry:ui",
    files: [
      {
        path: "akasha-ui/stack.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "stacked-avatar",
    type: "registry:ui",
    files: [
      {
        path: "akasha-ui/stacked-avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "typography",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "akasha-ui/typography.tsx",
        type: "registry:ui",
      },
    ],
  },
];
