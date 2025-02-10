import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-scroll-restoration",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-scroll-restoration.ts",
        type: "registry:hook",
      },
    ],
  },
];
