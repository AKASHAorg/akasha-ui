"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const ImageContext = React.createContext<{
  hasError: boolean;
} | null>(null);

const useImageContext = () => {
  const context = React.useContext(ImageContext);
  if (!context) {
    throw new Error(
      "`useImageContext` must be used within an `Image` component"
    );
  }
  return context;
};

const ImageFallback = ({ children }: React.ComponentProps<"span">) => {
  const { hasError } = useImageContext();
  if (!hasError) return null;
  return (
    <div data-slot="image-fallback" className="absolute inset-0">
      {children}
    </div>
  );
};

const DelayLoad = ({
  children,
  loadAfter = 300,
}: {
  children: React.ReactNode;
  loadAfter?: number;
}) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), loadAfter);
    return () => clearTimeout(timer);
  }, [loadAfter]);

  return show ? <>{children}</> : null;
};

const Image = ({
  alt,
  showLoadingIndicator,
  className,
  children,
  onLoad,
  onError,
  ...props
}: React.ComponentProps<"img"> & {
  showLoadingIndicator?: boolean;
}) => {
  const [loading, setLoading] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  if (hasError) return null;

  return (
    <ImageContext.Provider value={{ hasError }}>
      <div data-slot="image-container" className="relative">
        {showLoadingIndicator && loading && (
          <DelayLoad>
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted" />
            </div>
          </DelayLoad>
        )}
        <img
          data-slot="image"
          className={cn("h-full w-full object-cover", className)}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={(event) => {
            setLoading(false);
            onLoad?.(event);
          }}
          onError={(event) => {
            setError(true);
            setLoading(false);
            onError?.(event);
          }}
          {...props}
        />
        {children}
      </div>
    </ImageContext.Provider>
  );
};

export { Image, ImageFallback };
