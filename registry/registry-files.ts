import { Registry } from "@/registry/schema";

export const files: Registry = [
  {
    name: "did-key",
    type: "registry:file",
    files: [
      {
        path: "custom-icons/did-key.tsx",
        type: "registry:file",
        target: "custom-icons/did-key.tsx",
      },
    ],
  },
  {
    name: "ethereum",
    type: "registry:file",
    files: [
      {
        path: "custom-icons/ethereum.tsx",
        type: "registry:file",
        target: "custom-icons/ethereum.tsx",
      },
    ],
  },
  {
    name: "extension-type",
    type: "registry:file",
    files: [
      {
        path: "types/extension-type.ts",
        type: "registry:file",
        target: "types/extension-type.ts",
      },
    ],
  },
  {
    name: "no-eth",
    type: "registry:file",
    files: [
      {
        path: "custom-icons/no-eth.tsx",
        type: "registry:file",
        target: "custom-icons/no-eth.tsx",
      },
    ],
  },
  {
    name: "solana",
    type: "registry:file",
    files: [
      {
        path: "custom-icons/solana.tsx",
        type: "registry:file",
        target: "custom-icons/solana.tsx",
      },
    ],
  },
];
