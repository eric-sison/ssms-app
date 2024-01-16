"use client";

import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { DataTable } from "../ui/DataTable";
import { getAllSubCategories } from "@/functions/http/sub-categories";
import { ColumnDef } from "@tanstack/react-table";
import { FlattenedSubCategory } from "@/types/SubCategory";
import { DataTableColumnHeader } from "../ui/DataTableHeader";
import dayjs from "dayjs";

const columns: ColumnDef<FlattenedSubCategory>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader title="Name" column={column} />,
    cell: (info) => info.getValue(),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader title="Description" column={column} />,
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader title="Category" column={column} />,
    cell: (info) => info.getValue(),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <DataTableColumnHeader title="Last updated" column={column} />,
    cell: (info) => <>{dayjs(info.getValue() as Date).format("dddd, MMMM D, YYYY")}</>,
    enableColumnFilter: false,
  },
];

export const SubCategoriesDataTable: FunctionComponent = () => {
  const { data: result, isLoading } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: () => getAllSubCategories({ flatten: true }),
  });

  if (isLoading) return <>Loading...</>;

  if (result) return <DataTable columns={columns} data={result.data} />;
};
