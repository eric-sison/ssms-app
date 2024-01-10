import { SettingsDebug } from "@/components/debug/SettingsDebug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function Settings() {
  return <SettingsDebug />;
}
