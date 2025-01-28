"use client";

import React, { createContext, forwardRef, useContext } from "react";

import { Button, ButtonProps } from "@/registry/default/ui/button";

interface DuplexButtonContextType {
  isActive: boolean;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const DuplexButtonContext = createContext<DuplexButtonContextType | undefined>(
  undefined
);

export type DuplexButtonProps = {
  children: React.ReactNode;
  active: boolean;
  className?: string;
};

type DuplexButtonEvents = Pick<
  ButtonProps,
  | "onClick"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onFocus"
  | "onBlur"
  | "onKeyDown"
  | "onKeyUp"
  | "onDoubleClick"
>;

export type DuplexButtonActiveProps = DuplexButtonEvents & {
  children: React.ReactNode;
};

export type DuplexButtonActiveDefaultProps = Omit<
  ButtonProps,
  keyof DuplexButtonEvents
>;
export type DuplexButtonActiveHoverProps = ButtonProps;
export type DuplexButtonInactiveProps = ButtonProps;

const DuplexButton = forwardRef<React.ElementRef<"div">, DuplexButtonProps>(
  ({ children, active, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <DuplexButtonContext.Provider
        value={{
          isActive: active,
          isHovered,
          setIsHovered,
        }}
      >
        <div
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ display: "inline-block" }}
          {...props}
        >
          {children}
        </div>
      </DuplexButtonContext.Provider>
    );
  }
);

const useDuplexButtonContext = () => {
  const context = useContext(DuplexButtonContext);
  if (!context) {
    throw new Error(
      "DuplexButton compound components must be used within DuplexButton"
    );
  }
  return context;
};

export const DuplexButtonActive: React.FC<DuplexButtonActiveProps> = ({
  children,
  onClick,
  ...props
}) => {
  const { isActive } = useDuplexButtonContext();
  if (!isActive) return null;

  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export const DuplexButtonActiveDefault: React.FC<
  DuplexButtonActiveDefaultProps
> = ({ children, ...props }) => {
  const { isHovered } = useDuplexButtonContext();
  if (isHovered) return null;

  return <Button {...props}>{children}</Button>;
};

export const DuplexButtonActiveHover: React.FC<
  DuplexButtonActiveHoverProps
> = ({ children, ...props }) => {
  const { isHovered } = useDuplexButtonContext();
  if (!isHovered) return null;

  return <Button {...props}>{children}</Button>;
};

export const DuplexButtonInactive: React.FC<DuplexButtonInactiveProps> = ({
  children,
  onClick,
  ...props
}) => {
  const { isActive } = useDuplexButtonContext();
  if (isActive) return null;

  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default DuplexButton;
