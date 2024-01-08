"use client";

import { ColumnDef, useReactTable } from "@tanstack/react-table";
import { FunctionComponent } from "react";
import { DataTableSelectableTableHeader } from "../ui/DataTableSelectableHeader";
import { DataTableSelectableRow } from "../ui/DataTableSelectableRow";
import { DataTableColumnHeader } from "../ui/DataTableHeader";
import { DataTable } from "../ui/DataTable";

export type Payment = {
  check?: undefined;
  id: string;
  amount: number;
  status: string;
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "check",
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
];

type TicketsDataTableProps = {
  data: Array<Payment>;
};

export const TicketsDataTable: FunctionComponent<TicketsDataTableProps> = ({ data }) => {
  return (
    <>
      <DataTable name="tickets" data={data} columns={columns} />
      <DataTable name="2" data={data} columns={columns} />
      <DataTable name="3" data={data} columns={columns} />
    </>
  );
};
