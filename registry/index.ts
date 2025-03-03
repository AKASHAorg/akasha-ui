import { blocks } from "@/registry/registry-blocks";
import { examples } from "@/registry/registry-examples";
import { files } from "@/registry/registry-files";
import { hooks } from "@/registry/registry-hooks";
import { lib } from "@/registry/registry-lib";
import { themes } from "@/registry/registry-themes";
import { ui } from "@/registry/registry-ui";
import { Registry } from "@/registry/schema";

export const registry: Registry = [
  ...ui,
  ...files,
  ...blocks,
  ...lib,
  ...hooks,
];

// Internal use only.
export const registryInternal: Registry = [...examples, ...themes];
