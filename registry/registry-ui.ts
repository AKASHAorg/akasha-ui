import { Registry } from "@/registry/schema";

export const ui: Registry = [
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
