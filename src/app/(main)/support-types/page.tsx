import { PageHeading } from "@/components/features/PageHeading";
import { SupportTypesDataTable } from "@/components/features/SupportTypesDataTable";
import { AddSupportTypeModal } from "@/components/features/AddSupportTypeModal";
import { BreadCrumbs, BreadCrumbsLink } from "@/components/ui/BreadCrumbs";

//TODO: remove this sample data
export type SupportType = {
  displayName: string;
  description: string;
  createdAt: Date;
};

const data: SupportType[] = [
  {
    displayName: "Simple",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum quae harum mollitia praesentium blanditiis aliquid beatae eius vero consequatur.",
    createdAt: new Date(),
  },

  {
    displayName: "Complex",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, tenetur ipsa?",
    createdAt: new Date(),
  },

  {
    displayName: "Remote",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
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
