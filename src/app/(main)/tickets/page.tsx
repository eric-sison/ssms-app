"use client";

import { PageHeading } from "@/components/features/PageHeading";
import { DataTable } from "@/components/ui/DataTable";
import { DataTableColumnHeader } from "@/components/ui/DataTableHeader";
import { DataTableSelectableTableHeader } from "@/components/ui/DataTableSelectableHeader";
import { DataTableSelectableRow } from "@/components/ui/DataTableSelectableRow";
import { ColumnDef } from "@tanstack/react-table";

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
};

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

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => <DataTableSelectableTableHeader table={table} />,
    cell: ({ row }) => <DataTableSelectableRow row={row} />,
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Task ID" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-md capitalize border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
          {row.original.status}
        </span>
        <div className="max-w-[40rem] truncate">{row.original.email}</div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
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
        <DataTable data={data} columns={columns} />
      </section>
    </div>
  );
}
