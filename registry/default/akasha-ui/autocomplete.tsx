"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Skeleton } from "@/registry/default/ui/skeleton";

export type Option = Record<"value" | "label", string>;

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  isLoading?: boolean;
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

export const Autocomplete = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  AutoCompleteProps
>(
  (
    {
      options,
      emptyMessage,
      disabled,
      isLoading = false,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {
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
      <CommandPrimitive ref={ref} onKeyDown={handleKeyDown}>
        <div
          className={cn(
            " overflow-hidden border rounded-lg h-10 items-center flex",
            className
          )}
        >
          <CommandInput
            ref={inputRef}
            value={inputValue}
            onValueChange={isLoading ? undefined : setInputValue}
            onBlur={handleBlur}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            className="text-sm w-full"
          />
        </div>
        <div className="relative mt-1">
          <div
            className={cn(
              "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-background outline-none",
              isOpen ? "block" : "hidden"
            )}
          >
            <CommandList className="rounded-lg ring-1 ring-border">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options.length > 0 && !isLoading ? (
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected =
                      props.multiple === true
                        ? props.value?.some(
                            (item) => item.value === option.value
                          )
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
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                  {emptyMessage}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        </div>
      </CommandPrimitive>
    );
  }
);
Autocomplete.displayName = "Autocomplete";
