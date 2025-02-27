import * as React from "react";

import { Badge } from "../ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="destructive" asChild>
      <a>Destructive</a>
    </Badge>
  );
}
