import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const PageContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("h-full space-y-8", className)} {...props} />;
  }
);

PageContainer.displayName = "PageContainer";
// return <div className="h-full space-y-8"></div>;

{
  /* <FormItemContext.Provider value={{ id }}>
<div ref={ref} className={cn("space-y-2", className)} {...props} />
</FormItemContext.Provider> */
}
