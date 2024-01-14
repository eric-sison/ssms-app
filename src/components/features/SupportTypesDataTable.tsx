"use client";

import { FunctionComponent } from "react";
import { DataTable } from "../ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../ui/DataTableHeader";
import { SupportType } from "@/types/SupportType";
import { useQuery } from "@tanstack/react-query";
import { getAllSupportTypes } from "@/functions/http/support-types";
import dayjs from "dayjs";

const columns: ColumnDef<SupportType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader title={"Name"} column={column} />,
    cell: (info) => info.getValue(),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader title={"Description"} column={column} />,
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <DataTableColumnHeader title="Last updated" column={column} />,
    cell: (info) => <>{dayjs(info.getValue() as Date).format("dddd, MMMM D, YYYY")}</>,
    enableColumnFilter: false,
  },
];

export const SupportTypesDataTable: FunctionComponent = () => {
  const { data: result, isLoading } = useQuery({
    queryKey: ["support-types"],
    queryFn: getAllSupportTypes,
  });

  if (isLoading) return <>Loading...</>;

  if (result) return <DataTable columns={columns} data={result.data} />;
};
