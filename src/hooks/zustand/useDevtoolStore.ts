import { create } from "zustand";

type DevToolStore = {
  showDevTools: boolean;
  setShowDevTools: (show: boolean) => void;
};

export const useDevToolStore = create<DevToolStore>()((set) => ({
  showDevTools: false,
  setShowDevTools: (showDevTools) => set({ showDevTools }),
}));
