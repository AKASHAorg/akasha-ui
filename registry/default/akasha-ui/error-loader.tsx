// ErrorLoader component

import React from "react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/registry/default/akasha-ui/button";
import {
  Image,
  ImageFallback,
  ImageRoot,
} from "@/registry/default/akasha-ui/image";
import { Typography } from "@/registry/default/akasha-ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/registry/default/ui/card";

const ErrorLoader = ({
  title,
  message,
  children,
}: {
  title: string;
  message: string;
  children?: React.ReactNode;
}) => {
  let cardButton: React.ReactNode | null = null;
  let cardImage: React.ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === ErrorLoaderButton) {
        if (cardButton) {
          throw new Error("Only one CardButton is allowed");
        }
        cardButton = child;
      } else if (child.type === ErrorLoaderImage) {
        if (cardImage) {
          throw new Error("Only one CardImage is allowed");
        }
        cardImage = child;
      } else {
        throw new Error("Invalid child type");
      }
    }
  });

  return (
    <Card className="w-[348px] py-5 flex flex-col items-center justify-center rounded-3xl">
      <ImageRoot>
        {cardImage}
        <ImageFallback>Failed to load image</ImageFallback>
      </ImageRoot>

      <CardTitle className="flex flex-col items-center justify-center mt-4 mb-2">
        <Typography variant="h5">{title}</Typography>
      </CardTitle>

      <CardContent className="flex flex-col items-center justify-center pb-0">
        <Typography variant="xs" className="text-muted-foreground">
          {message}
        </Typography>
      </CardContent>

      {cardButton && (
        <CardFooter className="flex flex-col items-center justify-center pt-10 pb-0">
          {cardButton}
        </CardFooter>
      )}
    </Card>
  );
};

const ErrorLoaderButton = ({ ...props }: ButtonProps) => {
  return <Button {...props} />;
};

const ErrorLoaderImage = ({
  className,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return (
    <Image
      {...props}
      className={cn("h-[200px] w-[200px] object-contain rounded-lg", className)}
    />
  );
};

export { ErrorLoader, ErrorLoaderButton, ErrorLoaderImage };
