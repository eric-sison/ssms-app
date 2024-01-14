import { SupportTypesDataTable } from "@/components/features/SupportTypesDataTable";
import { AddSupportTypeModal } from "@/components/features/AddSupportTypeModal";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { Hammer } from "lucide-react";
import { Metadata } from "next";
import { PageHead } from "@/components/features/PageHead";
import { PageBody } from "@/components/features/PageBody";

export const metadata: Metadata = {
  title: "Support Types",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/support-types", label: "Support Types" },
];

export default async function SupportTypes() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Support Types"
        icon={<Hammer />}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      >
        <div className="flex items-center gap-2">
          <AddSupportTypeModal />
        </div>
      </PageHead>

      <PageBody>
        <SupportTypesDataTable />
      </PageBody>
    </>
  );
}
