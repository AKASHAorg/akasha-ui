import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "autocomplete",
    type: "registry:ui",
    registryDependencies: ["command", "input"],
    dependencies: ["cmdk", "lucide-react"],
    files: [
      {
        path: "akasha-ui/autocomplete.tsx",
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
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              primary: {
                start: "hsl(var(--primary-start))",
                end: "hsl(var(--primary-end))",
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
    name: "circular-progress",
    type: "registry:ui",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "akasha-ui/circular-progress.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              warning: {
                DEFAULT: "hsl(var(--warning)",
                foreground: "hsl(var(--warning-foreground)",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        warning: "47.9 95.8% 53.1%",
        "warning-foreground": "54.5 91.7% 95.3%",
      },
    },
  },
  {
    name: "copy-to-clipboard",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "akasha-ui/copy-to-clipboard.tsx",
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
        path: "akasha-ui/duplex-button.tsx",
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
        path: "akasha-ui/error-loader.tsx",
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
    name: "infinite-scroll",
    type: "registry:ui",
    dependencies: ["@tanstack/react-virtual", "custom/stack"],
    files: [
      {
        path: "akasha-ui/infinite-scroll.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-scroll-restoration.ts",
        type: "registry:hook",
      },
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "inline-notification",
    type: "registry:ui",
    files: [
      {
        path: "akasha-ui/inline-notification.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              success: {
                DEFAULT: "hsl(var(--success)",
                foreground: "hsl(var(--success-foreground)",
              },
              warning: {
                DEFAULT: "hsl(var(--warning)",
                foreground: "hsl(var(--warning-foreground)",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        success: "160.1 84.1% 39.4%",
        "success-foreground": "151.8 81% 95.9%",
        warning: "47.9 95.8% 53.1%",
        "warning-foreground": "54.5 91.7% 95.3%",
      },
    },
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
    name: "sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              success: {
                DEFAULT: "hsl(var(--success)",
                foreground: "hsl(var(--success-foreground)",
              },
              warning: {
                DEFAULT: "hsl(var(--warning)",
                foreground: "hsl(var(--warning-foreground)",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        success: "160.1 84.1% 39.4%",
        "success-foreground": "151.8 81% 95.9%",
        warning: "47.9 95.8% 53.1%",
        "warning-foreground": "54.5 91.7% 95.3%",
      },
    },
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
