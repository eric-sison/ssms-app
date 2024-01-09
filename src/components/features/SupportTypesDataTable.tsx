"use client";

import { FunctionComponent } from "react";
import { DataTable } from "../ui/DataTable";
import { SupportType } from "@/app/(main)/support-types/page";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../ui/DataTableHeader";

type SupportTypesDataTableProps = {
  data: SupportType[];
};

const columns: ColumnDef<SupportType>[] = [
  {
    accessorKey: "displayName",
    header: ({ column }) => <DataTableColumnHeader title={"Name"} column={column} />,
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader title={"Description"} column={column} />,
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
];

export const SupportTypesDataTable: FunctionComponent<SupportTypesDataTableProps> = ({ data }) => {
  return <DataTable columns={columns} data={data} />;
};
