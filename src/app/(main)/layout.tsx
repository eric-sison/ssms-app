import { Sidebar } from "@/components/navigation/Sidebar";
import { LayoutProps } from "../layout";

export default function MainPageLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="h-full w-full p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
