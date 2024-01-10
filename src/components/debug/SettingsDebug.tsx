"use client";

import { FunctionComponent } from "react";
import { Button } from "../ui/Button";
import { useTheme } from "next-themes";
import { useDevToolStore } from "@/lib/devtoolStore";

export const SettingsDebug: FunctionComponent = () => {
  const { setTheme } = useTheme();
  const showDevTools = useDevToolStore((state) => state.setShowDevTools);

  return (
    <div className="space-x-5">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>

      <Button onClick={() => showDevTools(true)}>Show Query Provider</Button>
      <Button onClick={() => showDevTools(false)}>Hide Query Provider</Button>
    </div>
  );
};
