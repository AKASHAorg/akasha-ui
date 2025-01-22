import React from "react"
import { VariantProps, cva } from "class-variance-authority"

const iconContainerStyles = cva(
  "flex items-center justify-center relative bg-secondary",
  {
    variants: {
      variant: {
        squareLarge: "w-28 h-28 rounded-3xl text-3xl", // 112px
        squareMedium: "w-14 h-14 rounded-2xl text-lg", // 56px
        squareSmall: "w-10 h-10 rounded-xl text-base", // 40px
        roundLarge: "w-12 h-12 rounded-full text-lg", // 48px
        roundMedium: "w-10 h-10 rounded-full text-base", // 40px
        roundSmall: "w-8 h-8 rounded-full text-sm", // 32px
        roundExtraSmall: "w-5 h-5 rounded-full text-xs", // 20px
      },
    },
    defaultVariants: {
      variant: "squareMedium",
    },
  }
)

const badgeStyles = cva("absolute rounded-full w-3 h-3 bg-orange-600", {
  variants: {
    position: {
      topRight: "top-0 right-0",
      topLeft: "top-0 left-0",
      bottomRight: "bottom-0 right-0",
      bottomLeft: "bottom-0 left-0",
    },
  },
  defaultVariants: {
    position: "topRight",
  },
})

export interface IconContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconContainerStyles> {
  children: React.ReactNode
  badge?: boolean // If true, show the badge
  badgePosition?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft" // Badge position
}

const IconContainer: React.FC<IconContainerProps> = ({
  variant,
  className,
  children,
  badge = false,
  badgePosition = "topRight",
  ...props
}) => {
  return (
    <div className={iconContainerStyles({ variant, className })} {...props}>
      {children}
      {badge && <div className={badgeStyles({ position: badgePosition })} />}
    </div>
  )
}

export default IconContainer
