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
];
