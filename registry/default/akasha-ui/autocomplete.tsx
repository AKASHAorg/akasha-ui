"use client";

import * as React from "react";
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

export type Option = Record<"value" | "label", string>;

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
} & (
  | {
      multiple: true;
      value?: Option[];
      onValueChange?: (value: Option[]) => void;
    }
  | {
      multiple?: false;
      value?: Option;
      onValueChange?: (value: Option) => void;
    }
);

export const Autocomplete = ({
  options,
  emptyMessage,
  disabled,
  loading = false,
  placeholder,
  className,
  ...props
}: AutoCompleteProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          if (props.multiple === true) {
            const newSelected = [...(props.value || []), optionToSelect];
            props.onValueChange?.(newSelected);
          } else {
            props.onValueChange?.(optionToSelect);
          }
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, props]
  );

  const handleBlur = React.useCallback(() => {
    setOpen(false);
    if (props.multiple === false) {
      setInputValue(props.value?.label || "");
    }
  }, [props.value, props.multiple]);

  const handleSelectOption = React.useCallback(
    (selectedOption: Option) => {
      if (props.multiple === true) {
        const isSelected = props.value?.some(
          (option) => option.value === selectedOption.value
        );

        const newSelected = isSelected
          ? props.value?.filter(
              (option) => option.value !== selectedOption.value
            ) || []
          : [...(props.value || []), selectedOption];

        setInputValue("");
        props.onValueChange?.(newSelected);
      } else {
        setInputValue(selectedOption.label);
        props.onValueChange?.(selectedOption);

        setTimeout(() => {
          inputRef?.current?.blur();
        }, 0);
      }
    },
    [props]
  );

  return (
    <Command
      data-slot="autocomplete"
      onKeyDown={handleKeyDown}
      className={cn(
        "flex flex-col gap-1 bg-transparent rounded-lg text-sm **:data-[slot=command-input-wrapper]:h-10 **:data-[slot=command-input-wrapper]:border **:data-[slot=command-input-wrapper]:rounded-lg **:data-[slot=command-input-wrapper]:bg-card overflow-visible",
        className
      )}
    >
      <CommandInput
        ref={inputRef}
        value={inputValue}
        onValueChange={loading ? undefined : setInputValue}
        onBlur={handleBlur}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn("w-full")}
      />
      <div className="relative">
        <CommandList
          className={cn(
            "absolute animate-in fade-in-0 zoom-in-95 z-10 w-full border rounded-lg bg-card p-1",
            { hidden: !isOpen }
          )}
        >
          {!loading && (
            <CommandEmpty className="flex justify-center p-2">
              {emptyMessage}
            </CommandEmpty>
          )}
          {loading && (
            <CommandPrimitive.Loading className="flex justify-center p-1">
              <Loader2 className="animate-spin" />
            </CommandPrimitive.Loading>
          )}
          {options.length > 0 && !loading && (
            <CommandGroup>
              {options.map((option) => {
                const isSelected =
                  props.multiple === true
                    ? props.value?.some((item) => item.value === option.value)
                    : props.value?.value === option.value;

                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onSelect={() => handleSelectOption(option)}
                    className={cn(
                      "flex w-full items-center gap-2",
                      !isSelected ? "pl-8" : null
                    )}
                  >
                    {isSelected ? <Check className="w-4 text-current" /> : null}
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </div>
    </Command>
  );
};
