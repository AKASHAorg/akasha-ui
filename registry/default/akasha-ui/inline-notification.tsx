import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleAlert, CircleCheck, CircleX } from "lucide-react";

import { cn } from "@/lib/utils";

import { typographyVariants } from "./typography";

const inlineNotificationVariants = cva(
  "relative bg-background text-foreground w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
  {
    variants: {
      variant: {
        info: "",
        success: "",
        error: "",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const variantToIconMap = {
  info: <CircleAlert size={16} className="text-primary" />,
  success: <CircleCheck size={16} className="text-success" />,
  error: <CircleX size={16} className="text-destructive" />,
};

const InlineNotification = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof inlineNotificationVariants>
>(({ className, variant = "info", children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(inlineNotificationVariants({ variant }), className)}
    {...props}
  >
    {variant && variantToIconMap[variant]}
    {children}
  </div>
));
InlineNotification.displayName = "InlineNotification";

const InlineNotificationTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-2",
      typographyVariants({ variant: "sm" }),
      "font-bold",
      "leading-none",
      className
    )}
    {...props}
  />
));
InlineNotificationTitle.displayName = "InlineNotificationTitle";

const InlineNotificationDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "[&_p]:leading-relaxed",
      typographyVariants({ variant: "sm" }),
      className
    )}
    {...props}
  />
));
InlineNotificationDescription.displayName = "InlineNotificationDescription";

export {
  InlineNotification,
  InlineNotificationTitle,
  InlineNotificationDescription,
};
