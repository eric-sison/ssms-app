import { PageHeading } from "@/components/features/PageHeading";
import { SupportTypesDataTable } from "@/components/features/SupportTypesDataTable";
import { AddSupportTypeModal } from "@/components/features/AddSupportTypeModal";
import { BreadCrumbs, BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { Hammer } from "lucide-react";

//TODO: remove this sample data
export type SupportType = {
  displayName: string;
  description: string;
  createdAt: Date;
};

const data: SupportType[] = [
  {
    displayName: "Simple Support",
    description:
      "Refers to a type of support that can be accomplished within three (3) working days from the receipt of the request.",
    createdAt: new Date(),
  },

  {
    displayName: "Complex Support",
    description:
      "Refers to a type of support that can be accomplished within ten (10) working days from the receipt of the request.",
    createdAt: new Date(),
  },

  {
    displayName: "Remote",
    description: "Refers to a type of support that can be done virtually.",
    createdAt: new Date(),
  },
];

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/support-types", label: "Support Types" },
];

export default function SupportTypes() {
  return (
    <>
      <div className="space-y-7">
        <BreadCrumbs links={links} />
        <section className="flex justify-between">
          <PageHeading
            title="Support Types"
            icon={<Hammer />}
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <div className="flex items-center gap-2">
            {/* <Button variant={"secondary"}>Add New</Button> */}
            <AddSupportTypeModal />
          </div>
        </section>
      </div>

      <section>
        <SupportTypesDataTable data={data} />
      </section>
    </>
  );
}
