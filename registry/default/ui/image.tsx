"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const ImageContext = React.createContext<{
  loading: boolean;
  hasError: boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
} | null>(null);

const useImageContext = () => {
  const context = React.useContext(ImageContext);
  if (!context) {
    throw new Error(
      "`useImageContext` must be used within an `ImageRoot` component"
    );
  }
  return context;
};

const ImageRoot = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [loading, setLoading] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  return (
    <ImageContext.Provider value={{ loading, hasError, setLoading, setError }}>
      <div
        data-slot="image-root"
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </ImageContext.Provider>
  );
};

const ImageFallback = ({ children }: { children: React.ReactNode }) => {
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
  onLoad,
  onError,
  ...props
}: React.ComponentProps<"img"> & {
  showLoadingIndicator?: boolean;
}) => {
  const { setLoading, setError, loading, hasError } = useImageContext();

  React.useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  if (hasError) return null;

  return (
    <>
      {showLoadingIndicator && loading && (
        <DelayLoad>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
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
    </>
  );
};

export { Image, ImageRoot, ImageFallback };
