import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "stepper",
    type: "registry:ui",
    files: [
      {
        path: "akasha-ui/stepper.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "autocomplete",
    type: "registry:ui",
    registryDependencies: ["skeleton", "custom/command"],
    dependencies: ["cmdk", "lucide-react"],
    files: [
      {
        path: "akasha-ui/autocomplete.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    type: "registry:ui",
    registryDependencies: ["dialog"],
    dependencies: ["cmdk", "lucide-react", "@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "akasha-ui/button.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              "primary-start": {
                DEFAULT: "hsl(var(--primary-start))",
              },
              "primary-end": {
                DEFAULT: "hsl(var(--primary-end))",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        "primary-start": "329 86% 70%;",
        "primary-end": "239 84% 67%;",
      },
      dark: {
        "primary-start": "329 86% 70%;",
        "primary-end": "239 84% 67%;",
      },
    },
  },
  {
    name: "duplex-button",
    type: "registry:ui",
    registryDependencies: ["custom/button"],
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
    files: [
      {
        path: "akasha-ui/image.tsx",
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
        path: "akasha-ui/profile-avatar-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "profile-avatar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-avatar", "lucide-react"],
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
