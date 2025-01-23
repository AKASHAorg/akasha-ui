"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

// Context for managing the image state
const ImageContext = createContext<{
  isLoading: boolean;
  hasError: boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
} | null>(null);

const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("Image components must be used within an Image.");
  }
  return context;
};

// Main Image Component
const ImageRoot = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  return (
    <ImageContext.Provider
      value={{ isLoading, hasError, setLoading, setError }}
    >
      <div className="relative">{children}</div>
    </ImageContext.Provider>
  );
};

// Fallback Subcomponent
const ImageFallback = ({ children }: { children: ReactNode }) => {
  const { hasError } = useImageContext();
  return hasError ? <>{children}</> : null;
};

// Next.js Image Subcomponent
interface ImageProps extends NextImageProps {
  showLoadingIndictor?: boolean;
}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  ({ showLoadingIndictor, ...props }) => {
    const { setLoading, setError, isLoading, hasError } = useImageContext();

    useEffect(() => {
      setLoading(true);
    }, [setLoading]);

    return (
      <>
        {showLoadingIndictor && isLoading && (
          <div
            className={cn("absolute inset-0 flex items-center justify-center")}
          >
            <Loader2 className={cn("animate-spin text-secondary")} />
          </div>
        )}
        {!hasError && (
          <NextImage
            {...props}
            onLoadingComplete={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
          />
        )}
      </>
    );
  }
);

export { ImageRoot, ImageFallback, Image };
