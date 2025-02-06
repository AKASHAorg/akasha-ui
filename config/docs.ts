import { MainNavItem, SidebarNavItem } from "types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/autocomplete",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation/manual",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "AKASHA Components",
      items: [
        {
          title: "Autocomplete",
          href: "/docs/components/autocomplete",
          items: [],
        },
        {
          title: "Copy to clipboard",
          href: "/docs/components/copy-to-clipboard",
          items: [],
        },
        {
          title: "Circular Progress",
          href: "/docs/components/circular-progress",
          items: [],
        },
        {
          title: "Duplex Button",
          href: "/docs/components/duplex-button",
          items: [],
        },
        {
          title: "Error Loader",
          href: "/docs/components/error-loader",
          items: [],
        },
        {
          title: "Icon Container",
          href: "/docs/components/icon-container",
          items: [],
        },
        {
          title: "Image",
          href: "/docs/components/image",
          items: [],
        },
        {
          title: "Inline Notification",
          href: "/docs/components/inline-notification",
          items: [],
        },
        {
          title: "Profile Avatar Button",
          href: "/docs/components/profile-avatar-button",
          items: [],
        },
        {
          title: "Profile Avatar",
          href: "/docs/components/profile-avatar",
          items: [],
        },
        {
          title: "Stack",
          href: "/docs/components/stack",
          items: [],
        },
        {
          title: "Stacked Avatar",
          href: "/docs/components/stacked-avatar",
          items: [],
        },
        {
          title: "Stepper",
          href: "/docs/components/stepper",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
      ],
    },
    {
      title: "Custom ShadCN Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Form",
          href: "/docs/components/form",
          items: [],
        },
      ],
    },
  ],
};
