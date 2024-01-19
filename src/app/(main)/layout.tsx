import { Sidebar } from "@/components/navigation/Sidebar";
import { LayoutProps } from "../layout";
import { PageContainer } from "@/components/features/PageContainer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TokenProvider } from "@/components/providers/TokenProvider";

export default async function MainPageLayout({ children }: LayoutProps) {
  if (!cookies().get("refresh_token")) {
    redirect("/login");
  }

  return (
    <TokenProvider>
      <div className="flex h-full">
        <Sidebar />
        <main className="h-full w-full overflow-y-auto">
          <PageContainer>{children}</PageContainer>
        </main>
      </div>
    </TokenProvider>
  );
}
