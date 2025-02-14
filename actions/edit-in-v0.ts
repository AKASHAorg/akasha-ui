"use server";

import { capitalCase } from "change-case";

import { getRegistryItem } from "@/lib/registry";
import { Style } from "@/registry/registry-styles";

export async function editInV0({
  name,
  style,
  url,
}: {
  name: string;
  style?: Style["name"];
  url: string;
}) {
  style = style ?? "default";
  try {
    const registryItem = await getRegistryItem(name, style);

    if (!registryItem) {
      return { error: "Something went wrong. Please try again later." };
    }

    // Remove v0 prefix from the name
    registryItem.name = registryItem.name.replace(/^v0-/, "");

    const projectName = capitalCase(name.replace(/\d+/g, ""));
    registryItem.description = registryItem.description || projectName;

    // Replace `@/registry/default/` in files.
    registryItem.files = registryItem.files?.map((file) => {
      if (file.content?.includes("@/registry/default/ui")) {
        file.content = file.content?.replaceAll(
          "@/registry/default/ui",
          "@/components/ui"
        );
      }
      return file;
    });

    const payload = {
      version: 2,
      payload: registryItem,
      source: {
        title: "shadcn/ui",
        url,
      },
      meta: {
        project: projectName,
        file: `${name}.tsx`,
      },
    };

    const response = await fetch(`${process.env.V0_URL}/chat/api/open-in-v0`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "x-v0-edit-secret": process.env.V0_EDIT_SECRET!,
        "x-vercel-protection-bypass":
          process.env.DEPLOYMENT_PROTECTION_BYPASS || "not-set",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("Unauthorized");
      }

      console.error(response.statusText);

      throw new Error("Something went wrong. Please try again later.");
    }

    const result = await response.json();

    return {
      ...result,
      url: `${process.env.V0_URL}/chat/api/open-in-v0/${result.id}`,
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
}
