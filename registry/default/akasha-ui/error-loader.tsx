import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Image,
  ImageFallback,
  ImageRoot,
} from "@/registry/default/akasha-ui/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/registry/default/ui/card";

interface ErrorLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  type:
    | "no-apps"
    | "not-authenticated"
    | "script-error"
    | "page-not-found"
    | "list-not-available";
  publicImgPath?: string;
}

const ErrorLoaderTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn("px-6 pt-4", className)} {...props} />
));
ErrorLoaderTitle.displayName = CardTitle.displayName;

const ErrorLoaderDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardDescription
    ref={ref}
    className={cn("pt-2 pb-6", className)}
    {...props}
  />
));
ErrorLoaderDescription.displayName = CardDescription.displayName;

const ErrorLoaderFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn("justify-center", className)}
    {...props}
  />
));
ErrorLoaderFooter.displayName = CardFooter.displayName;

const ErrorLoader = ({
  children,
  publicImgPath = "/images",
  type,
  className,
  ...props
}: ErrorLoaderProps) => {
  let imageSrc: string;

  switch (type) {
    case "no-apps":
      imageSrc = `${publicImgPath}/no-apps-error.webp`;
      break;
    case "not-authenticated":
      imageSrc = `${publicImgPath}/not-authenticated.webp`;
      break;
    case "page-not-found":
      imageSrc = `${publicImgPath}/new404.webp`;
      break;
    case "list-not-available":
      imageSrc = `${publicImgPath}/list-not-available.webp`;
      break;
    default:
      imageSrc = `${publicImgPath}/general-error.webp`;
      break;
  }

  return (
    <Card className={cn(className)} {...props}>
      <ImageRoot className={cn("justify-items-center px-6 pt-6")}>
        <Image
          src={imageSrc}
          alt="Error Image"
          className="size-[12.5rem] object-contain rounded-lg"
        />
        <ImageFallback>Failed to load image</ImageFallback>
      </ImageRoot>
      {children}
    </Card>
  );
};
ErrorLoader.displayName = Card.displayName;

export {
  ErrorLoader,
  ErrorLoaderTitle,
  ErrorLoaderDescription,
  ErrorLoaderFooter,
};
