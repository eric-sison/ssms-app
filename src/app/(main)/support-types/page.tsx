import { PageHeading } from "@/components/features/PageHeading";
import { SupportTypesDataTable } from "@/components/features/SupportTypesDataTable";
import { AddSupportTypeModal } from "@/components/features/AddSupportTypeModal";
import { Button } from "@/components/ui/Button";

export default function SupportTypes() {
  return (
    <div className="h-full space-y-10">
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

      <section>
        <SupportTypesDataTable />
      </section>
    </div>
  );
}
