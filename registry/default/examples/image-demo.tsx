import {
  Image,
  ImageFallback,
  ImageRoot,
} from "@/registry/default/akasha-ui/image";

export default function ImageDemo() {
  return (
    <ImageRoot>
      <Image
        showLoadingIndictor={true}
        src="https://picsum.photos/200/300"
        alt="Example"
        width={256}
        height={256}
      />
      <ImageFallback>
        <div className="w-full p-2 h-full flex items-center justify-center bg-gray-200 text-gray-500">
          Failed to load image
        </div>
      </ImageFallback>
    </ImageRoot>
  );
}
