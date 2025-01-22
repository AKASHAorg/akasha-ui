import {
  Image,
  ImageFallback,
  ImageRoot,
} from "@/registry/default/akasha-ui/image"

export default function ImageDemo() {
  return (
    <ImageRoot>
      <ImageFallback>
        <div className="w-full p-2 h-full flex items-center justify-center bg-gray-200 text-gray-500">
          Failed to load image
        </div>
      </ImageFallback>
      <Image
        enableLoader={true}
        src="https://picsum.photos/200/300"
        alt="Example"
        width={256}
        height={256}
      />
    </ImageRoot>
  )
}
