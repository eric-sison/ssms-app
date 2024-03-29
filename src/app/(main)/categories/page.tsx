import { AddCategoryModal } from "@/components/features/AddCategoryModal";
import { CategoriesDataTable } from "@/components/features/CategoriesDataTable";
import { PageBody } from "@/components/features/PageBody";
import { PageHead } from "@/components/features/PageHead";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { FolderSymlink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
];

export default function Categories() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Categories"
        icon={<FolderSymlink />}
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <div className="flex items-center gap-2">
          <AddCategoryModal />
        </div>
      </PageHead>

      <PageBody>
        <CategoriesDataTable />
      </PageBody>
    </>
  );
}
