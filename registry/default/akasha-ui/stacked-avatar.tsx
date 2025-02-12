import * as React from "react";

import { cn } from "@/lib/utils";

const StackedAvatar = ({
  className,
  count,
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  count: number;
  children: (index: number) => React.ReactNode;
}) => {
  return (
    <div
      data-slot="stacked-avatar"
      className={cn("flex flex-row", className)}
      {...props}
    >
      {Array(Math.abs(count))
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={cn("rounded-full border border-border")}
            style={{ transform: `translateX(-${index * 50}%)` }}
          >
            {children(index)}
          </div>
        ))}
    </div>
  );
};

export { StackedAvatar };
