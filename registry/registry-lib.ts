import { Registry } from "@/registry/schema";

export const lib: Registry = [
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "get-image-from-seed",
    type: "registry:lib",
    files: [
      {
        path: "lib/get-image-from-seed.ts",
        type: "registry:lib",
      },
    ],
  },
];
