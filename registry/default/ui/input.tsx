import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  type?: string;
}

function Input({ className, type, defaultValue, value, ...props }: InputProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;

  const handleClear = React.useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (inputRef.current) {
        setInternalValue("");
        inputRef.current.value = "";
        inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        inputRef.current.focus();
      }
    },
    []
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      props.onChange?.(e);
    },
    [isControlled, props.onChange]
  );

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    },
    [props.onFocus]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    },
    [props.onBlur]
  );

  const showClearButton =
    type === "search" && isFocused && (internalValue || value);
  const showSearchIcon = type === "search" && !showClearButton;

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-10 w-full min-w-0 rounded-md border bg-card px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4",
          className
        )}
        {...props}
      />
      {showClearButton && (
        <X
          onMouseDown={handleClear}
          size={24}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground ml-2 cursor-pointer hover:text-foreground transition-colors"
        />
      )}
      {showSearchIcon && (
        <Search
          size={24}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground bg-card"
        />
      )}
    </div>
  );
}

export { Input };
