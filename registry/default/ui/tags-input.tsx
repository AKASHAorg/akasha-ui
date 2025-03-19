import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Input } from "@/registry/default/ui/input";

type Separator = "Space" | "Enter" | "Comma";

interface TagsInputContextProps {
  tags: Set<string>;
  registerTag: (tag: string) => void;
  handleRemove: (tag: string) => void;
}

const TagsInputContext = React.createContext<TagsInputContextProps | null>(
  null
);

function useTagsInputContext() {
  const context = React.useContext(TagsInputContext);
  if (!context) {
    throw new Error("`useTagsInputContext` must be used within `TagsInput`");
  }
  return context;
}

function isSeparator(code: string, separators: Separator[]): code is Separator {
  return !!separators.find((separator) => separator === code);
}

const TagsInputList = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { tags, handleRemove } = useTagsInputContext();

  //remove unmounted TagsInputItem's from local state
  React.useEffect(() => {
    const childrenArray = React.Children.toArray(children).filter(
      (
        child
      ): child is React.ReactElement<
        React.ComponentProps<typeof TagsInputItem>
      > => React.isValidElement(child) && child.type === TagsInputItem
    );

    const currentTags = new Set(childrenArray.map((child) => child.props.tag));

    if (currentTags.size < tags.size) {
      const removedTags = tags.difference(currentTags);
      removedTags.forEach(handleRemove);
    }
  }, [children, handleRemove, tags]);

  return (
    <div
      data-slot="tags-input-list"
      className={cn("w-full flex items-center gap-2 flex-wrap", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const TagsInputItem = ({
  tag,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Badge> & { tag: string }) => {
  const { tags, registerTag, handleRemove } = useTagsInputContext();

  React.useEffect(() => {
    if (!tags.has(tag)) {
      registerTag(tag);
    }
  }, [tag, registerTag, tags]);

  return (
    <Badge
      data-slot="tags-input-item"
      variant="outline"
      className={cn("rounded-full", className)}
      {...props}
    >
      {React.Children.count(children) ? children : tag}
      <button type="button" onClick={() => handleRemove(tag)}>
        <X className="size-4" />
      </button>
    </Badge>
  );
};

const TagsInput = ({
  ref,
  separators = ["Enter"],
  className,
  children,
  onTagsChange,
  onChange,
  onKeyDown,
  ...props
}: React.ComponentProps<typeof Input> & {
  separators?: Separator[];
  onTagsChange?: (tags: Set<string>) => void;
}) => {
  const [tags, setTags] = React.useState<Set<string>>(new Set());
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const registerTag = (tag: string) => {
    setTags((prevTags) => new Set([...prevTags, tag]));
  };

  const handleRemove = (tag: string) => {
    const newTags = new Set(tags);
    newTags.delete(tag);
    setTags(newTags);
    onTagsChange?.(newTags);
  };

  return (
    <TagsInputContext.Provider value={{ tags, registerTag, handleRemove }}>
      <div
        data-slot="tags-input"
        className={cn("flex flex-col gap-3", className)}
      >
        <Input
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          data-slot="tags-input-field"
          type="search"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            onChange?.(event);
          }}
          onKeyDown={(event) => {
            if (isSeparator(event.code, separators) && inputValue.trim()) {
              if (event.key === "," && separators.includes("Comma")) {
                event.preventDefault();
              }

              registerTag(inputValue);
              onTagsChange?.(new Set([...tags, inputValue]));

              // Clear controlled input via native setter to propagate change event.
              const input = event.target as HTMLInputElement;
              Object.getOwnPropertyDescriptor(
                HTMLInputElement.prototype,
                "value"
              )?.set?.call(input, "");

              input.dispatchEvent(new Event("change", { bubbles: true }));
              inputRef.current?.blur();
            }

            onKeyDown?.(event);
          }}
          {...props}
        />
        {children}
      </div>
    </TagsInputContext.Provider>
  );
};

export { TagsInput, TagsInputList, TagsInputItem };
