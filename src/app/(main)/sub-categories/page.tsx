import { PageHead } from "@/components/features/PageHead";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { FileStack } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub Categories",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/sub-categories", label: "Sub Categories" },
];

export default function SubCategories() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Sub Categories"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        icon={<FileStack />}
      />
    </>
  );
}
