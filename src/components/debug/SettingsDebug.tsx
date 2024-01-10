"use client";

import { FunctionComponent } from "react";
import { Button } from "../ui/Button";
import { useTheme } from "next-themes";
import { useDevToolStore } from "@/lib/devtoolStore";

export const SettingsDebug: FunctionComponent = () => {
  const { setTheme } = useTheme();
  const showDevTools = useDevToolStore((state) => state.setShowDevTools);

  return (
    <div className="space-x-2">
      <Button variant="secondary" onClick={() => setTheme("light")}>
        Light
      </Button>
      <Button variant="secondary" onClick={() => setTheme("dark")}>
        Dark
      </Button>

      <Button variant="secondary" onClick={() => showDevTools(true)}>
        Show Query Provider
      </Button>
      <Button variant="secondary" onClick={() => showDevTools(false)}>
        Hide Query Provider
      </Button>
    </div>
  );
};
