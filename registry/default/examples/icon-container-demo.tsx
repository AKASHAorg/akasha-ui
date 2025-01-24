import React from "react";
import { Heart } from "lucide-react";

import { IconContainer } from "@/registry/default/akasha-ui/icon-container";

const IconContainerDemo = () => {
  return (
    <div className="space-y-8 p-8">
      <div className="space-y-8 ">
        <h2 className="text-lg font-bold">Square</h2>
        <IconContainer variant="square" size="lg">
          <Heart />
        </IconContainer>
        <IconContainer variant="square" size="md" showNotificationDot={true}>
          <Heart />
        </IconContainer>
        <IconContainer variant="square" size="sm">
          <Heart />
        </IconContainer>
      </div>

      <div className="space-y-8 ">
        <h2 className="text-lg font-bold">Round</h2>
        <IconContainer variant="round" size="lg">
          <Heart />
        </IconContainer>
        <IconContainer showNotificationDot={true}>
          <Heart />
        </IconContainer>
        <IconContainer variant="round" size="sm">
          <Heart />
        </IconContainer>
        <IconContainer variant="round" size="xs">
          <Heart />
        </IconContainer>
      </div>
    </div>
  );
};

export default IconContainerDemo;
