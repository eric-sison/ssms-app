import { SettingsDebug } from "@/components/debug/SettingsDebug";
import { PageBody } from "@/components/features/PageBody";
import { PageHead } from "@/components/features/PageHead";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/settings", label: "Settings" },
];

export default function Settings() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Settings"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        icon={<Wrench />}
      />

      <PageBody>
        <SettingsDebug />
      </PageBody>
    </>
  );
}
