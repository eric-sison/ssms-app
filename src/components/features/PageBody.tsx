import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const PageBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />
);

PageBody.displayName = "PageBody";
