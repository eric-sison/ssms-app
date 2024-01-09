import { Sidebar } from "@/components/navigation/Sidebar";
import { LayoutProps } from "../layout";
import { PageContainer } from "@/components/features/PageContainer";

export default function MainPageLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="h-full w-full p-10 overflow-y-auto">
        <PageContainer>{children}</PageContainer>
      </main>
    </div>
  );
}
