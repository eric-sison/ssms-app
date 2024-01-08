import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Table } from "@tanstack/react-table";

type DataTableState = {
  name: string;
  dataTable: Table<any>;
};

type DataTableStore = {
  dataTables: DataTableState[];
  setDataTables: (dataTable: DataTableState) => void;
  removeDataTable: () => void;
};

export const useDataTable = create<DataTableStore>((set) => ({
  dataTables: [],
  removeDataTable: () => set(() => ({ dataTables: [] })),
  setDataTables: (dataTables) =>
    set((state) => {
      const updated = [...state.dataTables];

      updated.push(dataTables);

      return { dataTables: updated };
    }),
}));
