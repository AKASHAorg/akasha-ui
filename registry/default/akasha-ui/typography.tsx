import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-5xl	font-bold",
      h2: "scroll-m-20 text-4xl	font-bold",
      h3: "scroll-m-20 text-3xl	font-bold",
      h4: "scroll-m-20 text-2xl	font-bold",
      h5: "scroll-m-20 text-xl font-bold",
      p: "text-base",
      "regular-bold": "text-base font-bold",
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type Variant = VariantProps<typeof typographyVariants>["variant"];

type Heading = "h1" | "h2" | "h3" | "h4" | "h5";

function isHeading(variant: Variant): variant is Heading {
  return (
    variant !== null &&
    variant !== undefined &&
    ["h1", "h2", "h3", "h4", "h5"].includes(variant)
  );
}

function getTag(variant: Variant) {
  if (isHeading(variant) || variant === "p") return variant;
  if (variant === "sm" || variant === "xs") return "small";
  return "div";
}

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  bold?: boolean;
}

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ className, variant, bold, asChild, ...props }, ref) => {
  const tag = getTag(variant);
  const Comp = asChild ? Slot : tag;

  return (
    <Comp
      className={cn(
        typographyVariants({ variant, className }),
        bold && "font-bold"
      )}
      ref={ref}
      {...props}
    />
  );
});
Typography.displayName = "Typography";

export { Typography, typographyVariants };
