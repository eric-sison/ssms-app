import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode | ReactNode[];
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  if (cookies().get("refresh_token")) {
    redirect("/dashboard");
  }
  return <>{children}</>;
}
