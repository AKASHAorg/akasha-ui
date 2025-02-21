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
  {
    name: "extension-type",
    type: "registry:lib",
    files: [
      {
        path: "types/extension-type.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "did-key",
    type: "registry:lib",
    files: [
      {
        path: "custom-icons/did-key.tsx",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "ethereum",
    type: "registry:lib",
    files: [
      {
        path: "custom-icons/ethereum.tsx",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "no-eth",
    type: "registry:lib",
    files: [
      {
        path: "custom-icons/no-eth.tsx",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "solana",
    type: "registry:lib",
    files: [
      {
        path: "custom-icons/solana.tsx",
        type: "registry:lib",
      },
    ],
  },
];
