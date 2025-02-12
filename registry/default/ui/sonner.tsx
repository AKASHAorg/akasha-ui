"use client";

import { CircleAlert, CircleCheck, CircleX, TriangleAlert } from "lucide-react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg [&_svg]:size-4",
          description: "group-[.toast]:text-muted-foreground",
          icon: "self-start",
          content: "-mt-1",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary h-10",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground h-10",
        },
      }}
      icons={{
        info: <CircleAlert className="text-primary" />,
        success: <CircleCheck className="text-success" />,
        warning: <TriangleAlert className="text-warning" />,
        error: <CircleX className="text-destructive" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
