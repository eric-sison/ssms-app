"use client";

import Link from "next/link";
import { FunctionComponent } from "react";
import { Paragraph } from "../typography/Paragraph";
import { usePathname } from "next/navigation";

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
        path === targetPath ? "bg-primary text-white dark:bg-secondary" : ""
      } flex items-center justify-between px-4 py-2 rounded-md hover:text-white  hover:bg-primary/95 dark:hover:bg-secondary/95`}
    >
      <section className="flex items-center gap-3">
        {icon}
        <p className="font-medium">{label}</p>
      </section>

      {notifCount && <p className="text-sm font-medium">{notifCount}</p>}
    </Link>
  );
};
