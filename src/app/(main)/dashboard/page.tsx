import { DatePickerWithRange } from "@/components/features/DatePicker";
import { TicketStatusCard } from "@/components/features/TicketStatusCard";
import { SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { PageHeading } from "@/components/features/PageHeading";
import { BreadCrumbs, BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import {
  Activity,
  CalendarClock,
  Clock,
  FileCheck2,
  FileClock,
  FilePieChart,
  FileX2,
  TimerReset,
} from "lucide-react";

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
];

export default function Dashboard() {
  return (
    <>
      <div className="space-y-7">
        <BreadCrumbs links={links} />
        <section className="flex justify-between">
          <PageHeading
            title="Dashboard"
            icon={<FilePieChart />}
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <div className="flex items-center gap-2">
            <DatePickerWithRange />
            <Button variant={"secondary"}>Search</Button>
          </div>
        </section>
      </div>

      <section className="flex items-center gap-5">
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
      </section>

      {/* <section className="h-[calc(100%-20rem)] grid grid-cols-5 gap-5">
        <div className="border bg-secondary/40 rounded-lg col-span-3"></div>
        <div className="border bg-secondary/40 rounded-lg col-span-2"></div>
      </section> */}
    </>
  );
}
