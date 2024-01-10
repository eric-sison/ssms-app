import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const PageContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("h-full space-y-8 p-10", className)} {...props} />;
  }
);

PageContainer.displayName = "PageContainer";
