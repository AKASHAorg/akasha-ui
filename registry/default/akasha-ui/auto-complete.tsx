"use client";

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Command as CommandPrimitive, CommandSeparator } from "cmdk";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Skeleton } from "@/registry/default/ui/skeleton";

export type Option = Record<"value" | "label", string> & Record<string, string>;

export interface AutoCompleteRef {
  deselectOption: (optionToDeselect: Option) => void;
}

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  value?: Option | Option[];
  onValueChange?: (value: Option | Option[]) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  multiple?: boolean;
};

export const AutoComplete = forwardRef<AutoCompleteRef, AutoCompleteProps>(
  (
    {
      options,
      placeholder,
      emptyMessage,
      value,
      onValueChange,
      disabled,
      isLoading = false,
      multiple = false,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option[]>(
      multiple
        ? Array.isArray(value)
          ? value
          : []
        : value
        ? [value as Option]
        : []
    );
    const [inputValue, setInputValue] = useState<string>("");

    const handleDeselect = useCallback(
      (optionToDeselect: Option) => {
        if (!multiple) return;

        const newSelected = selected.filter(
          (option) => option.value !== optionToDeselect.value
        );
        setSelected(newSelected);
        setInputValue("");
        onValueChange?.(newSelected);
      },
      [multiple, selected, onValueChange]
    );

    useImperativeHandle(
      ref,
      () => ({
        deselectOption: handleDeselect,
      }),
      [handleDeselect]
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
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
            setSelected([optionToSelect]);
            onValueChange?.(optionToSelect);
          }
        }

        if (event.key === "Escape") {
          input.blur();
        }
      },
      [isOpen, options, onValueChange]
    );

    const handleBlur = useCallback(() => {
      setOpen(false);
      if (!multiple) {
        setInputValue(selected[0]?.label || "");
      }
    }, [selected, multiple]);

    const handleSelectOption = useCallback(
      (selectedOption: Option) => {
        if (multiple) {
          const isSelected = selected.some(
            (option) => option.value === selectedOption.value
          );
          const newSelected = isSelected
            ? selected.filter((option) => option.value !== selectedOption.value)
            : [...selected, selectedOption];

          setSelected(newSelected);
          setInputValue("");
          onValueChange?.(newSelected);
        } else {
          setInputValue(selectedOption.label);
          setSelected([selectedOption]);
          onValueChange?.(selectedOption);

          // This is a hack to prevent the input from being focused after the user selects an option
          setTimeout(() => {
            inputRef?.current?.blur();
          }, 0);
        }
      },
      [multiple, selected, onValueChange]
    );

    return (
      <CommandPrimitive onKeyDown={handleKeyDown}>
        <div className="border rounded-lg">
          <CommandInput
            ref={inputRef}
            value={inputValue}
            onValueChange={isLoading ? undefined : setInputValue}
            onBlur={handleBlur}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            className="text-base"
          />
        </div>
        <div className="relative mt-1">
          <div
            className={cn(
              "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-background outline-none",
              isOpen ? "block" : "hidden"
            )}
          >
            <CommandList className="rounded-lg ring-1 ring-muted">
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
                    const isSelected = selected.some(
                      (item) => item.value === option.value
                    );
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
