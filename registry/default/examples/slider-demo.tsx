import * as React from "react";

import { Slider } from "../ui/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[33]} max={100} min={0} step={1} />;
}
