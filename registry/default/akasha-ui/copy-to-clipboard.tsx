"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

interface CopyToClipboardProps {
  textToCopy: string;
  tooltipText?: string;
  buttonText?: string;
  buttonSuccessText?: string;
  resetDuration?: number;
}

export default function CopyToClipboard({
  textToCopy,
  tooltipText = "Copy to clipboard",
  buttonText = "Copy to clipboard",
  buttonSuccessText = "Copied",
  resetDuration = 5000,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), resetDuration);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={copyToClipboard}>
          <Button variant="default" size="sm">
            {copied ? (
              <span className="flex items-center gap-2.5">
                <Check size={12} />
                {buttonSuccessText}
              </span>
            ) : (
              <span>{buttonText}</span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
