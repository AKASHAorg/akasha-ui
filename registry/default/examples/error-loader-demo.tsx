import { Button } from "@/registry/default/ui/button";
import {
  ErrorLoader,
  ErrorLoaderDescription,
  ErrorLoaderFooter,
  ErrorLoaderTitle,
} from "@/registry/default/ui/error-loader";

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
