"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Command as CommandPrimitive } from "cmdk";
import { Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Input } from "@/registry/default/ui/input";

const AutocompleteContext = React.createContext<
  | ((
      | {
          multiple: true;
          onValueChange?: (value: string[]) => void;
        }
      | { multiple?: false; onValueChange?: (value: string) => void }
    ) & {
      searchValue: string;
      open: boolean;
      emptyMessage: string;
      loading?: boolean;
      inputRef: React.RefObject<HTMLInputElement | null>;
      selectedValues: string[];
      setSearchValue: React.Dispatch<React.SetStateAction<string>>;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
      registerOption: (value: string, label: React.ReactNode) => void;
    })
  | null
>(null);

const useAutocompleteContext = () => {
  const context = React.useContext(AutocompleteContext);
  if (!context) {
    throw new Error(
      "`useAutocompleteContext` must be used within `Autocomplete`"
    );
  }
  return context;
};

const Autocomplete = ({
  emptyMessage = "",
  loading = false,
  className,
  children,
  ...props
}: {
  emptyMessage?: string;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
} & (
  | {
      multiple: true;
      value?: string[];
      onValueChange?: (value: string[]) => void;
    }
  | {
      multiple?: false;
      value?: string;
      onValueChange?: (value: string) => void;
    }
)) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [options, setOptions] = React.useState<Record<string, React.ReactNode>>(
    {}
  );

  const registerOption = React.useCallback(
    (value: string, label: React.ReactNode) => {
      setOptions((prev) => ({ ...prev, [value]: label }));
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!inputRef.current) return;

      const { multiple, value = [], onValueChange } = props;

      if (!open) setOpen(true);

      if (event.key === "Escape") {
        inputRef.current.blur();
        return;
      }

      if (event.key !== "Enter" || !inputRef.current.value) return;

      const selectedValue = Object.keys(options).find((key) => {
        const optionLabel = options[key];
        return (
          typeof optionLabel === "string" &&
          optionLabel.toLowerCase() === inputRef.current!.value.toLowerCase()
        );
      });

      if (!selectedValue) return;

      if (multiple) {
        const newSelected = new Set(Array.isArray(value) ? value : []);
        newSelected.add(selectedValue);
        onValueChange?.([...newSelected]);
      } else {
        onValueChange?.(selectedValue);
      }
    },
    [open, options, props, setOpen]
  );

  return (
    <AutocompleteContext.Provider
      value={{
        ...props,
        searchValue,
        emptyMessage,
        open,
        selectedValues: props.multiple
          ? (props.value ?? [])
          : props.value
            ? [props.value]
            : [],
        loading,
        inputRef,
        setOpen,
        setSearchValue,
        registerOption,
      }}
    >
      <Command
        data-slot="autocomplete"
        onKeyDown={handleKeyDown}
        className={cn(
          "relative flex flex-col gap-2 bg-transparent rounded-lg text-sm overflow-visible",
          className
        )}
      >
        <div className="hidden">
          <CommandInput value={searchValue} />
        </div>
        {children}
      </Command>
    </AutocompleteContext.Provider>
  );
};

const AutocompleteTrigger = ({
  asChild,
  ...props
}:
  | { asChild: true; children?: React.ReactNode }
  | (React.ComponentProps<"input"> & {
      asChild?: false;
    })) => {
  const { searchValue, setSearchValue, setOpen, inputRef, multiple } =
    useAutocompleteContext();

  const Comp = asChild ? Slot : Input;

  const handleBlur = React.useCallback(() => {
    setOpen(false);
    if (!multiple) {
      setSearchValue(searchValue || "");
    }
  }, [setOpen, setSearchValue, searchValue, multiple]);

  return (
    <Comp
      data-slot="autocomplete-trigger"
      ref={inputRef}
      value={searchValue}
      type="search"
      onChange={(event) => {
        setSearchValue(event.target.value);
        setOpen(true);
      }}
      onFocus={() => {
        setOpen(true);
      }}
      onBlur={() => {
        handleBlur();
      }}
      {...props}
    />
  );
};

const AutocompleteList = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandList>) => {
  const { open, loading, emptyMessage } = useAutocompleteContext();

  return (
    <CommandList
      data-slot="autocomplete-list"
      className={cn(
        "absolute top-11 animate-in fade-in-0 zoom-in-95 z-10 w-full border rounded-lg bg-card p-1",
        {
          hidden: !open,
        },
        !emptyMessage && "has-[[data-slot='command-group'][hidden]]:hidden",
        className
      )}
      {...props}
    >
      {loading && (
        <CommandPrimitive.Loading className="flex justify-center p-1">
          <Loader2 className="animate-spin" />
        </CommandPrimitive.Loading>
      )}
      {!loading && emptyMessage && (
        <CommandEmpty className="flex justify-center p-2">
          {emptyMessage}
        </CommandEmpty>
      )}
      {!loading && <CommandGroup>{children}</CommandGroup>}
    </CommandList>
  );
};

const AutocompleteItem = ({
  value,
  children,
  className,
  onMouseDown,
  onSelect,
  ...props
}: {
  children: React.ReactNode;
  value: string;
} & React.ComponentProps<typeof CommandItem>) => {
  const {
    selectedValues,
    setSearchValue,
    setOpen,
    registerOption,
    multiple,
    onValueChange,
  } = useAutocompleteContext();

  React.useEffect(() => {
    registerOption(value, children);
  }, [value, children, registerOption]);

  const isSelected = selectedValues.includes(value);

  const searchValue = typeof children === "string" ? children : value;

  const handleSelect = () => {
    if (multiple) {
      const newSelected = isSelected
        ? selectedValues.filter((item) => item !== value)
        : [...selectedValues, value];

      onValueChange?.(newSelected);
    } else {
      onValueChange?.(value);
      setSearchValue(searchValue);
      setOpen(false);
    }
  };

  return (
    <CommandItem
      data-slot="autocomplete-item"
      value={searchValue}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onMouseDown?.(event);
      }}
      onSelect={(value) => {
        handleSelect();
        onSelect?.(value);
      }}
      className={cn(
        "flex w-full items-center gap-2",
        !isSelected && "pl-8",
        className
      )}
      {...props}
    >
      {isSelected && <Check className="w-4 text-current" />}
      {children}
    </CommandItem>
  );
};

export {
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteList,
  AutocompleteItem,
};
