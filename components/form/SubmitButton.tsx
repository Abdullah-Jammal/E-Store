"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { RefreshCw } from "lucide-react";

type btnSize = "lg" | "default" | "sm" | "icon";

interface SubmitButtonProps {
  className?: string;
  size?: btnSize;
  text: string;
}

function SubmitButton({
  className,
  size = "lg",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending ? true : false}
      className={cn("cursor-pointer", className)}
      size={size}
    >
      {pending ? (
        <>
          please wait <RefreshCw className="animate-spin" size={16} />
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitButton;
