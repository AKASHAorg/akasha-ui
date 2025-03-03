import { promises as fs } from "fs";
import path from "path";
import { rimraf } from "rimraf";

import { registry as registryItems } from "../registry";

const REGISTRY_URL =
  process.env.PUBLIC_REGISTRY_URL || "https://akasha-ui.pages.dev/r";

const modifiedRegistryItems = registryItems.map((item) => {
  const registryDependencies = item.registryDependencies?.map((dependency) =>
    dependency.startsWith("custom/")
      ? `${REGISTRY_URL}/styles/default/${dependency.substring(7)}.json`
      : dependency
  );

  return { ...item, registryDependencies };
});

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "akasha-ui",
  homepage: "https://akasha-ui.pages.dev/docs",
  items: modifiedRegistryItems,
};

try {
  rimraf.sync(path.join(process.cwd(), "registry/default/registry.json"));
  await fs.writeFile(
    path.join(process.cwd(), "registry/default/registry.json"),
    JSON.stringify(registry, null, 2),
    "utf8"
  );
} catch (error) {
  console.error(error);
  process.exit(1);
}
