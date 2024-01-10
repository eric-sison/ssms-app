import { PageHead } from "@/components/features/PageHead";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { FileSignature } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/reports", label: "Reports" },
];

export default function Reports() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Reports"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        icon={<FileSignature />}
      />
    </>
  );
}
