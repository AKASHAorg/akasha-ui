"use client";

import * as React from "react";
import { default as NextImage } from "next/image";
import { cn } from "@/lib/utils";

export type ImageProps = React.ComponentPropsWithoutRef<typeof NextImage> & {
  showLoadingIndicator?: boolean;
  fallbackSrc?: string;
  children?: React.ReactNode;
};

const ImageLoader = () => (
  <div className="flex justify-center items-center h-full w-full">
    <span className="loader" /> {/* TODO - define loader */}
  </div>
);

const Image = React.forwardRef<React.ElementRef<typeof NextImage>, ImageProps>(
  (
    {
      className,
      showLoadingIndicator = false,
      fallbackSrc,
      children,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    return (
      <div className="relative">
        {showLoadingIndicator && isLoading && <ImageLoader />}
        {!isError ? (
          <NextImage
            ref={ref}
            className={cn(
              isLoading && showLoadingIndicator ? "invisible" : "visible",
              className
            )}
            {...props}
            onLoad={handleLoad}
            onError={handleError}
          />
        ) : fallbackSrc ? (
          <NextImage
            src={fallbackSrc}
            alt={props.alt || "Fallback image"}
            className="fallback-image"
          />
        ) : (
          children
        )}
      </div>
    );
  }
);

Image.displayName = "Image";

export default Image;
