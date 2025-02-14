import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  searchIcon,
  ...props
}: React.ComponentProps<"input"> & { searchIcon?: boolean }) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
      {searchIcon && (
        <Search
          size={24}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      )}
    </div>
  );
}

export { Input };
