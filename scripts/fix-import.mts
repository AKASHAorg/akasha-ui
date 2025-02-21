export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    const typePathMap: Record<string, string> = {
      components: "@/components/",
      ui: "@/components/ui/",
      hooks: "@/hooks/",
      lib: "@/lib/",
    };

    const key = Object.keys(typePathMap).find((key) => type.endsWith(key));
    return key ? `${typePathMap[key]}${component}` : match;
  };

  return content.replace(regex, replacement);
}
