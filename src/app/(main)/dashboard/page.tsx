import { DatePickerWithRange } from "@/components/features/DatePicker";
import { TicketStatusCard } from "@/components/features/TicketStatusCard";
import { Button } from "@/components/ui/Button";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { Activity, Clock, FileCheck2, FilePieChart, FileX2 } from "lucide-react";
import { Metadata } from "next";
import { PageHead } from "@/components/features/PageHead";
import { PageBody } from "@/components/features/PageBody";

export const metadata: Metadata = {
  title: "Dashboard",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
];

export default async function Dashboard() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="Dashboard"
        icon={<FilePieChart />}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      >
        <div className="flex items-center gap-2">
          <DatePickerWithRange />
          <Button variant={"secondary"}>Search</Button>
        </div>
      </PageHead>

      <PageBody className="flex items-center gap-5">
        <TicketStatusCard
          title="Pending"
          count={5}
          description="Unassigned tickets"
          icon={<Clock className="text-amber-500 w-7 h-7" />}
        />
        <TicketStatusCard
          title="Active"
          count={2}
          description="In progress tickets"
          icon={<Activity className="text-green-500 w-7 h-7" />}
        />
        <TicketStatusCard
          title="Closed"
          count={11}
          description="Resolved tickets"
          icon={<FileCheck2 className="text-indigo-500 w-7 h-7" />}
        />
        <TicketStatusCard
          title="Cancelled"
          count={0}
          description="Cancelled tickets"
          icon={<FileX2 className="text-rose-500 w-7 h-7" />}
        />
      </PageBody>

      {/* <section className="h-[calc(100%-20rem)] grid grid-cols-5 gap-5">
        <div className="border bg-secondary/40 rounded-lg col-span-3"></div>
        <div className="border bg-secondary/40 rounded-lg col-span-2"></div>
      </section> */}
    </>
  );
}
