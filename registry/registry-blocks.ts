import { Registry } from "@/registry/schema";

export const blocks: Registry = [
    {
        name: "sidebar-01",
        type: "registry:block",
        description: "A simple sidebar with navigation grouped by section.",
        registryDependencies: [
            "sidebar",
            "breadcrumb",
            "separator",
            "label",
            "dropdown-menu",
        ],
        files: [
            {
                path: "blocks/sidebar-01/page.tsx",
                type: "registry:page",
                target: "app/dashboard/page.tsx",
            },
            {
                path: "blocks/sidebar-01/components/app-sidebar.tsx",
                type: "registry:component",
            },
            {
                path: "blocks/sidebar-01/components/search-form.tsx",
                type: "registry:component",
            },
            {
                path: "blocks/sidebar-01/components/version-switcher.tsx",
                type: "registry:component",
            },
        ],
        categories: ["sidebar",],
    },
];
