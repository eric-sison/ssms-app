"use client";

import Link from "next/link";
import { FunctionComponent, MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { NotificationsSheet } from "../features/NotificationsSheet";

type SidebarItemProps = {
  targetPath: string;
  icon: JSX.Element;
  label: string;
  notifCount?: number;
};

export const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  targetPath,
  icon,
  label,
  notifCount,
}) => {
  const path = usePathname();

  return (
    <Link
      href={targetPath}
      role="button"
      className={`${
        path === targetPath ? "bg-secondary text-primary" : ""
      } flex items-center justify-between px-4 py-2 rounded-md hover:bg-secondary font-medium`}
    >
      <section className="flex items-center gap-3">
        {icon}
        <p className="text-sm">{label}</p>
      </section>

      {notifCount && <p className="text-xs text-red-600 font-bold">{notifCount}</p>}
    </Link>
  );
};
