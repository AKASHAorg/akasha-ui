"use client";

import * as React from "react";
import Color from "colorjs.io";
import CssFilterConverter from "css-filter-converter";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const styleRef = React.useRef<HTMLStyleElement | null>(null);

  React.useEffect(() => {
    if (!inputRef.current || type !== "search") return;

    const updateSearchButtonStyle = () => {
      try {
        const primaryColor = getComputedStyle(
          inputRef.current!
        ).getPropertyValue("--primary");
        const color = new Color(primaryColor);
        const hex = color.to("srgb").toString({ format: "hex" });
        const filter = CssFilterConverter.hexToFilter(hex);

        if (!styleRef.current) {
          styleRef.current = document.createElement("style");
          document.head.appendChild(styleRef.current);
        }

        styleRef.current.textContent = `
          input[type="search"]::-webkit-search-cancel-button {
            filter: ${filter.color};
          }
        `;
      } catch (error) {
        console.error("Failed to update search button style:", error);
      }
    };

    updateSearchButtonStyle();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        updateSearchButtonStyle();
      });
    });

    // Observe the root element for style changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [type]);

  const isSearch = type === "search";
  return (
    <div data-slot="input-container" className="relative w-full">
      <input
        ref={inputRef}
        type={type}
        data-slot="input"
        className={cn(
          "peer border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-10 w-full min-w-0 rounded-md border bg-card pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4",
          isSearch ? "pl-10" : "pl-3",
          className
        )}
        {...props}
      />
      {isSearch && (
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground bg-card peer-focus:text-foreground"
        />
      )}
    </div>
  );
}

export { Input };
