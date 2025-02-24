import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "autocomplete-demo",
    type: "registry:example",
    registryDependencies: ["custom/autocomplete"],
    files: [
      {
        path: "examples/autocomplete-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "autocomplete-multiple-demo",
    type: "registry:example",
    registryDependencies: ["custom/autocomplete", "badge", "custom/button"],
    files: [
      {
        path: "examples/autocomplete-multiple-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-with-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-as-child",
    type: "registry:example",
    registryDependencies: ["custom/button"],
    files: [
      {
        path: "examples/button-as-child.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: [
      "custom/button",
      "custom/card",
      "custom/input",
      "label",
      "select",
    ],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["custom/input"],
    files: [
      {
        path: "examples/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-search-demo",
    type: "registry:example",
    registryDependencies: ["custom/input"],
    files: [
      {
        path: "examples/input-search-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-demo",
    type: "registry:example",
    registryDependencies: ["custom/textarea"],
    files: [
      {
        path: "examples/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "circular-progress-demo",
    type: "registry:example",
    registryDependencies: ["custom/circular-progress"],
    files: [
      {
        path: "examples/circular-progress-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "copy-to-clipboard-demo",
    type: "registry:example",
    registryDependencies: [
      "custom/copy-to-clipboard",
      "custom/profile-avatar-button",
    ],
    files: [
      {
        path: "examples/copy-to-clipboard-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "duplex-button-demo",
    type: "registry:example",
    registryDependencies: ["custom/duplex-button"],
    files: [
      {
        path: "examples/duplex-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "error-loader-demo",
    type: "registry:example",
    registryDependencies: ["custom/error-loader"],
    files: [
      {
        path: "examples/error-loader-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "extension-avatar-demo",
    type: "registry:example",
    registryDependencies: ["custom/extension-avatar"],
    files: [
      {
        path: "examples/extension-avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "extension-card-demo",
    type: "registry:example",
    registryDependencies: [
      "custom/extension-card",
      "custom/profile-avatar-button",
    ],
    files: [
      {
        path: "examples/extension-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "extension-type-icon-demo",
    type: "registry:example",
    registryDependencies: ["custom/extension-type-icon"],
    files: [
      {
        path: "examples/extension-type-icon-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-container-demo",
    type: "registry:example",
    registryDependencies: ["custom/icon-container"],
    files: [
      {
        path: "examples/icon-container-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-container-round",
    type: "registry:example",
    registryDependencies: ["custom/icon-container"],
    files: [
      {
        path: "examples/icon-container-round.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-container-square",
    type: "registry:example",
    registryDependencies: ["custom/icon-container"],
    files: [
      {
        path: "examples/icon-container-square.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-container-notification-dot",
    type: "registry:example",
    registryDependencies: ["custom/icon-container"],
    files: [
      {
        path: "examples/icon-container-notification-dot.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "image-demo",
    type: "registry:example",
    registryDependencies: ["custom/image"],
    files: [
      {
        path: "examples/image-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "infinite-scroll-demo",
    type: "registry:example",
    registryDependencies: ["custom/infinite-scroll"],
    files: [
      {
        path: "examples/infinite-scroll-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "infinite-scroll-element-demo",
    type: "registry:example",
    registryDependencies: ["custom/infinite-scroll"],
    files: [
      {
        path: "examples/infinite-scroll-element-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "inline-notification-demo",
    type: "registry:example",
    registryDependencies: ["custom/inline-notification"],
    files: [
      {
        path: "examples/inline-notification-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "inline-notification-info",
    type: "registry:example",
    registryDependencies: ["custom/inline-notification"],
    files: [
      {
        path: "examples/inline-notification-info.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "inline-notification-success",
    type: "registry:example",
    registryDependencies: ["custom/inline-notification"],
    files: [
      {
        path: "examples/inline-notification-success.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "inline-notification-destructive",
    type: "registry:example",
    registryDependencies: ["custom/inline-notification"],
    files: [
      {
        path: "examples/inline-notification-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-form",
    type: "registry:example",
    registryDependencies: ["custom/input", "custom/button", "custom/form"],
    files: [
      {
        path: "examples/input-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-demo",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-large-vertical",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-large-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-large-horizontal",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-large-horizontal.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-medium",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-medium.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-metadata",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-metadata.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-nsfw",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-nsfw.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-button-small",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar-button"],
    files: [
      {
        path: "examples/profile-avatar-button-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-demo",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar"],
    files: [
      {
        path: "examples/profile-avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-nsfw",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar"],
    files: [
      {
        path: "examples/profile-avatar-nsfw.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "profile-avatar-size",
    type: "registry:example",
    registryDependencies: ["custom/profile-avatar"],
    files: [
      {
        path: "examples/profile-avatar-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stack-demo",
    type: "registry:example",
    registryDependencies: ["custom/stack"],
    files: [
      {
        path: "examples/stack-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stack-align-items",
    type: "registry:example",
    registryDependencies: ["custom/stack"],
    files: [
      {
        path: "examples/stack-align-items.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stack-direction",
    type: "registry:example",
    registryDependencies: ["custom/stack"],
    files: [
      {
        path: "examples/stack-direction.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stack-divider",
    type: "registry:example",
    registryDependencies: ["custom/stack"],
    files: [
      {
        path: "examples/stack-divider.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stack-justify-content",
    type: "registry:example",
    registryDependencies: ["custom/stack"],
    files: [
      {
        path: "examples/stack-justify-content.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stacked-avatar-demo",
    type: "registry:example",
    registryDependencies: ["custom/stacked-avatar"],
    files: [
      {
        path: "examples/stacked-avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "stepper-demo",
    type: "registry:example",
    registryDependencies: ["custom/stepper", "custom/button"],
    files: [
      {
        path: "examples/stepper-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-demo",
    type: "registry:example",
    registryDependencies: ["custom/sonner", "custom/button"],
    files: [
      {
        path: "examples/sonner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-info",
    type: "registry:example",
    registryDependencies: ["custom/sonner", "custom/button"],
    files: [
      {
        path: "examples/sonner-info.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-success",
    type: "registry:example",
    registryDependencies: ["custom/sonner", "custom/button"],
    files: [
      {
        path: "examples/sonner-success.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-warning",
    type: "registry:example",
    registryDependencies: ["custom/sonner", "custom/button"],
    files: [
      {
        path: "examples/sonner-warning.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-error",
    type: "registry:example",
    registryDependencies: ["custom/sonner", "custom/button"],
    files: [
      {
        path: "examples/sonner-error.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-demo",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h1",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h1.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h2",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h2.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h3",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h3.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h4",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h4.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h5",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h5.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h6",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-h6.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-p",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-p.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-small",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-small-bold",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-small-bold.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-extra-small",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-extra-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-extra-small-bold",
    type: "registry:example",
    registryDependencies: ["custom/typography"],
    files: [
      {
        path: "examples/typography-extra-small-bold.tsx",
        type: "registry:example",
      },
    ],
  },
];
