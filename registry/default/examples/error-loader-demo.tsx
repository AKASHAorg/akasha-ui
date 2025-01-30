// ErrorLoader demo

import {
  ErrorLoader,
  ErrorLoaderButton,
  ErrorLoaderImage,
} from "../akasha-ui/error-loader";

export default function ErrorLoaderDemo() {
  return (
    <ErrorLoader title="Error Title" message="Error message">
      <ErrorLoaderButton>Action</ErrorLoaderButton>
      <ErrorLoaderImage src="https://picsum.photos/200/200" alt="Error Image" />
    </ErrorLoader>
  );
}
