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
  type?: "route" | "modal";
  onModalOpen?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  targetPath,
  icon,
  label,
  notifCount,
  type = "route",
  onModalOpen,
}) => {
  const path = usePathname();

  return type === "route" ? (
    <Link
      href={targetPath}
      role="button"
      className={`${
        path === targetPath ? "bg-secondary text-primary" : "text-primary/80"
      } flex items-center justify-between px-4 py-2 rounded-md hover:bg-secondary`}
    >
      <section className="flex items-center gap-3">
        {icon}
        <p className="text-sm">{label}</p>
      </section>

      {notifCount && <p className="text-xs font-medium">{notifCount}</p>}
    </Link>
  ) : (
    <NotificationsSheet
      // @ts-ignore
      onModalOpen={onModalOpen}
      icon={icon}
      label={label}
      notifCount={notifCount}
    />
  );
};
