import * as React from "react";

import { Badge } from "../ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex gap-4 flex-col">
      <Badge variant="default" asChild>
        <a>Default</a>
      </Badge>
    </div>
  );
}
