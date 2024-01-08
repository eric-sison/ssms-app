import { PageHeading } from "@/components/features/PageHeading";
import { Payment, TicketsDataTable } from "@/components/features/TicketsDataTable";

// TODO: remove this sample data
const data: Array<Payment> = [
  {
    id: "728ed52f1",
    amount: 100,
    status: "pending",
    email:
      "m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com m@example.com",
  },
  {
    id: "728ed52f2",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f3",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f4",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f5",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f6",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f7",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f8",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f9",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f10",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f11",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f12",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f13",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f14",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f15",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f16",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f17",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f18",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f19",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f20",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f21",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f22",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f23",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f24",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f25",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

export default function Tickets() {
  return (
    <div className="h-full space-y-10">
      <PageHeading
        title="Tickets"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />

      <section>
        <TicketsDataTable data={data} />
      </section>
    </div>
  );
}
