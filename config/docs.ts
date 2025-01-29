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
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Autocomplete",
          href: "/docs/components/autocomplete",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Duplex Button",
          href: "/docs/components/duplex-button",
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
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
      ],
    },
  ],
};
