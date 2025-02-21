import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "autocomplete",
    type: "registry:ui",
    registryDependencies: ["command", "input"],
    dependencies: ["cmdk", "lucide-react"],
    files: [
      {
        path: "ui/autocomplete.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    registryDependencies: ["custom/typography"],
    dependencies: ["@radix-ui/react-slot", "lucide-react"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "circular-progress",
    type: "registry:ui",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "ui/circular-progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "copy-to-clipboard",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "ui/copy-to-clipboard.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "duplex-button",
    type: "registry:ui",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "ui/duplex-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "error-loader",
    type: "registry:ui",
    registryDependencies: ["custom/card", "custom/image"],
    files: [
      {
        path: "ui/error-loader.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "extension-avatar",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: ["custom/image"],
    files: [
      {
        path: "ui/extension-avatar.tsx",
        type: "registry:ui",
      },
      {
        path: "types/get-image-from-seed.tsx",
        type: "registry:ui",
      },
      {
        path: "types/extension-type.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "extension-card",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "badge",
      "custom/extension-avatar",
      "custom/extension-type-icon",
      "custom/typography",
    ],
    files: [
      {
        path: "ui/extension-card.tsx",
        type: "registry:ui",
      },
      {
        path: "types/extension-type.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "extension-type-icon",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/extension-type-icon.tsx",
        type: "registry:ui",
      },
      {
        path: "types/extension-type.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "form",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-label",
      "lucide-react",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: ["label"],
    files: [
      {
        path: "ui/form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "icon-container",
    type: "registry:ui",
    files: [
      {
        path: "ui/icon-container.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "image",
    type: "registry:ui",
    files: [
      {
        path: "ui/image.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "infinite-scroll",
    type: "registry:ui",
    dependencies: ["@tanstack/react-virtual"],
    files: [
      {
        path: "ui/infinite-scroll.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-scroll-restoration.ts",
        type: "registry:hook",
      },
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "inline-notification",
    type: "registry:ui",
    files: [
      {
        path: "ui/inline-notification.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "profile-avatar-button",
    type: "registry:ui",
    registryDependencies: [
      "custom/profile-avatar",
      "custom/stack",
      "custom/icon-container",
      "custom/typography",
    ],
    files: [
      {
        path: "ui/profile-avatar-button.tsx",
        type: "registry:ui",
      },
      {
        path: "custom-icons/did-key.tsx",
        type: "registry:lib",
      },
      {
        path: "custom-icons/ethereum.tsx",
        type: "registry:lib",
      },
      {
        path: "custom-icons/no-eth.tsx",
        type: "registry:lib",
      },
      {
        path: "custom-icons/solana.tsx",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "profile-avatar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-avatar", "lucide-react"],
    files: [
      {
        path: "ui/profile-avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "stack",
    type: "registry:ui",
    files: [
      {
        path: "ui/stack.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "stacked-avatar",
    type: "registry:ui",
    files: [
      {
        path: "ui/stacked-avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "stepper",
    type: "registry:ui",
    files: [
      {
        path: "ui/stepper.tsx",
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
        path: "ui/typography.tsx",
        type: "registry:ui",
      },
    ],
  },
];
