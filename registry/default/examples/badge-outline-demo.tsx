import * as React from "react";

import { Badge } from "../ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="outline" asChild>
      <a>Outline</a>
    </Badge>
  );
}
