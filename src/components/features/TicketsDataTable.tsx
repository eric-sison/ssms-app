"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FunctionComponent } from "react";
import { DataTableSelectableTableHeader } from "../ui/DataTableSelectableHeader";
import { DataTableSelectableRow } from "../ui/DataTableSelectableRow";
import { DataTableColumnHeader } from "../ui/DataTableHeader";
import { DataTable } from "../ui/DataTable";
import { Badge } from "../ui/Badge";

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
    enableColumnFilter: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="max-w-[40rem] truncate">{row.original.email}</div>
      </div>
    ),
    enableColumnFilter: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => (
      <Badge variant={"secondary"} className="capitalize">
        {row.original.status}
      </Badge>
    ),
    enableColumnFilter: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    //enableColumnFilter: false,
  },
];

type TicketsDataTableProps = {
  data: Array<Payment>;
};

export const TicketsDataTable: FunctionComponent<TicketsDataTableProps> = ({ data }) => {
  return (
    <>
      <DataTable data={data} columns={columns} enableColumnVisibilityToggle={false} />
    </>
  );
};
