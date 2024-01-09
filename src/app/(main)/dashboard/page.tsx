import { DatePickerWithRange } from "@/components/features/DatePicker";
import { TicketStatusCard } from "@/components/features/TicketStatusCard";
import { SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { PageHeading } from "@/components/features/PageHeading";

export default function Dashboard() {
  return (
    <div className="h-full space-y-10">
      <section className="flex justify-between">
        <PageHeading
          title="Dashboard"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <div className="flex items-center gap-2">
          <DatePickerWithRange />
          <Button variant={"secondary"}>Search</Button>
        </div>
      </section>

      <section className="flex items-center gap-5">
        <TicketStatusCard
          title="Pending"
          count={5}
          description="Unassigned tickets"
          icon={<SolarStickerSquareBoldDuotone className="text-indigo-500" />}
        />
        <TicketStatusCard
          title="Active"
          count={2}
          description="In progress tickets"
          icon={<SolarBoltLinear className="text-amber-500" />}
        />
        <TicketStatusCard
          title="Closed"
          count={11}
          description="Resolved tickets"
          icon={<SolarTicketBoldDuotone className="text-green-500 -rotate-45" />}
        />
        <TicketStatusCard
          title="Cancelled"
          count={0}
          description="Cancelled tickets"
          icon={<SolarNotificationRemoveBoldDuotone className="text-rose-500" />}
        />
      </section>

      {/* <section className="h-[calc(100%-20rem)] grid grid-cols-5 gap-5">
        <div className="border bg-secondary/40 rounded-lg col-span-3"></div>
        <div className="border bg-secondary/40 rounded-lg col-span-2"></div>
      </section> */}
    </div>
  );
}

function SolarStickerSquareBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M22 15c-.584 0-1.076 0-1.5.008c-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22c.483 0 .954-.049 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338c.105-.483.161-.985.161-1.5Z"></path>
        <path
          d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 1.128 0 2.122-.02 3c-.575 0-1.06 0-1.48.008c-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045c-.008.42-.008.905-.008 1.48c-.878.02-1.872.02-3 .02Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}

function SolarBoltLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734c-.923-.283-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z"
      ></path>
    </svg>
  );
}

function SolarTicketBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="m14.014 17l-.006 2.003c-.001.47-.002.705-.149.851c-.147.146-.382.146-.854.146h-3.01c-3.78 0-5.67 0-6.845-1.172c-.81-.806-1.061-1.951-1.14-3.817c-.015-.37-.023-.556.046-.679c.07-.123.345-.277.897-.586a1.999 1.999 0 0 0 0-3.492c-.552-.308-.828-.463-.897-.586c-.069-.123-.061-.308-.045-.679c.078-1.866.33-3.01 1.139-3.817C4.324 4 6.214 4 9.995 4h3.51a.5.5 0 0 1 .501.499L14.014 7c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1v2c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1Z"
          clipRule="evenodd"
        ></path>
        <path
          d="M15.017 16c.553 0 1.002.448 1.002 1v1.976c0 .482 0 .723.155.87c.154.148.39.138.863.118c1.863-.079 3.007-.331 3.814-1.136c.809-.806 1.06-1.952 1.139-3.818c.015-.37.023-.555-.046-.678c-.069-.124-.345-.278-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.309.828-.463.897-.586c.07-.124.061-.309.046-.679c-.079-1.866-.33-3.011-1.14-3.818c-.877-.875-2.154-1.096-4.322-1.152a.497.497 0 0 0-.509.497V7c0 .552-.449 1-1.002 1v2a1 1 0 0 1 1.002 1v2c0 .552-.449 1-1.002 1v2Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}

function SolarNotificationRemoveBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841c-.659.659-1.72.659-3.841.659Zm-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        ></path>
        <path
          d="M20.535 20.535C22 19.072 22 16.714 22 12c0-1.358 0-2.52-.035-3.522c-.058.884-.213 1.452-.624 1.863c-.659.659-1.72.659-3.841.659c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
