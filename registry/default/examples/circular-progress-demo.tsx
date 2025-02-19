import * as React from "react";

import { CircularProgress } from "@/registry/default/ui/circular-progress";

export default function CircularProgressDemo() {
  const [progress, setProgress] = React.useState(20);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setProgress(80), 500);
    const timer2 = setTimeout(() => setProgress(100), 1000);
    const timer3 = setTimeout(() => setProgress(105), 1500);
    const timer4 = setTimeout(() => setProgress(80), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  return <CircularProgress value={progress} />;
}
