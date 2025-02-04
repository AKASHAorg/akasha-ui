import React from "react";
import { Heart } from "lucide-react";

import { IconContainer } from "@/registry/default/akasha-ui/icon-container";

const IconContainerNotificationDot = () => {
  return (
    <IconContainer showNotificationDot={true}>
      <Heart />
    </IconContainer>
  );
};

export default IconContainerNotificationDot;
