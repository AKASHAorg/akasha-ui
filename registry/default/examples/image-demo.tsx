import Image from "../akasha-ui/image";

export default function ImageDemo() {
  return (
    <Image
      alt="Alternative text"
      src="https://picsum.photos/200/300"
      width={200}
      height={200}
      showLoadingIndicator={true}
    />
  );
}
