"use client";

import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";

export default function Settings() {
  const { setTheme } = useTheme();
  return (
    <div className="p-10 space-x-5">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </div>
  );
}
