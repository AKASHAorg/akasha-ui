import { Image, ImageFallback } from "@/registry/default/ui/image";

export default function ImageDemo() {
  return (
    <Image
      showLoadingIndicator={true}
      src="https://picsum.photos/200/300"
      alt="Example"
      width={256}
      height={256}
    >
      <ImageFallback>Failed to load image</ImageFallback>
    </Image>
  );
}
