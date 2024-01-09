import { FunctionComponent } from "react";
import { DataTable } from "../ui/DataTable";

export const SupportTypesDataTable: FunctionComponent = () => {
  return (
    <DataTable
      columns={[]}
      data={[]}
      enableColumnVisibilityToggle={false}
      enablePagination={false}
      enableGlobalFilter={false}
    />
  );
};
