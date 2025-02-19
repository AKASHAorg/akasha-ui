import React from "react";
import { Heart } from "lucide-react";

import { IconContainer } from "@/registry/default/ui/icon-container";

const IconContainerNotificationSquare = () => {
  return (
    <IconContainer variant="square" size="xl">
      <Heart />
    </IconContainer>
  );
};

export default IconContainerNotificationSquare;
