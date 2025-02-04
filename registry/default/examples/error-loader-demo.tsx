import {
  ErrorLoader,
  ErrorLoaderDescription,
  ErrorLoaderFooter,
  ErrorLoaderTitle,
} from "@/registry/default/akasha-ui/error-loader";
import { Button } from "@/registry/default/ui/button";

export default function ErrorLoaderDemo() {
  return (
    <ErrorLoader type="not-authenticated">
      <ErrorLoaderTitle>Uh-oh! You are not connected!</ErrorLoaderTitle>
      <ErrorLoaderDescription>
        To create post you must be connected ⚡️
      </ErrorLoaderDescription>
      <ErrorLoaderFooter>
        <Button>Connect</Button>
      </ErrorLoaderFooter>
    </ErrorLoader>
  );
}
