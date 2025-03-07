import * as React from "react";

import {
  TagsInput,
  TagsInputItem,
  TagsInputList,
} from "@/registry/default/ui/tags-input";

const INTERESTS = ["akasha", "ipfs", "ethereum", "web3"];

export default function TagsInputDemo() {
  const [interests, setInterests] = React.useState(INTERESTS);

  return (
    <TagsInput
      onTagsChange={(tags) => setInterests([...tags])}
      placeholder="Interests"
      className="w-100"
    >
      <TagsInputList>
        {interests.map((interest) => (
          <TagsInputItem key={interest} tag={interest} />
        ))}
      </TagsInputList>
    </TagsInput>
  );
}
