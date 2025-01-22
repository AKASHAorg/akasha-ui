import { Registry } from "@/registry/schema";

export const ui: Registry = [
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
];
