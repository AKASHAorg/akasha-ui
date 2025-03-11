export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  /* the link should be a proper image loader like described on https://nextjs.org/docs/app/api-reference/config/next-config-js/images#example-loader-configuration
    for now it just returns the image it finds on the url without processing the width and quality
   */
  return `https://akasha-ui.pages.dev${src}?w=${width}&q=${quality || 75}`;
}
