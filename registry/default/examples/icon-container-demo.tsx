import React from "react"
import { Heart } from "lucide-react"

import IconContainer from "@/registry/default/akasha-ui/icon-container"

const IconContainerDemo = () => {
  return (
    <div className="space-y-8 p-8">
      <div className="space-y-8 ">
        <h2 className="text-lg font-bold">Square</h2>
        <IconContainer variant="squareLarge">
          <Heart className="w-full h-full p-4" />
        </IconContainer>
        <IconContainer variant="squareMedium" badge={true}>
          <Heart className="w-full h-full p-2" />
        </IconContainer>
        <IconContainer variant="squareSmall">
          <Heart className="w-full h-full p-2" />
        </IconContainer>
      </div>

      <div className="space-y-8 ">
        <h2 className="text-lg font-bold">Round</h2>
        <IconContainer variant="roundLarge">
          <Heart className="w-full h-full p-2" />
        </IconContainer>
        <IconContainer variant="roundMedium" badge={true}>
          <Heart className="w-full h-full p-2" />
        </IconContainer>
        <IconContainer variant="roundSmall">
          <Heart className="w-full h-full p-1.5" />
        </IconContainer>
        <IconContainer variant="roundExtraSmall">
          <Heart className="w-full h-full p-1" />
        </IconContainer>
      </div>
    </div>
  )
}

export default IconContainerDemo
