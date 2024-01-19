"use client";

import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Separator } from "./Separator";
import { usePathname } from "next/navigation";

export type BreadCrumbsLink = {
  path: string;
  label: string;
};

type BreadCrumbsProps = {
  links: BreadCrumbsLink[];
};

export const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = ({ links }) => {
  const pathName = usePathname();

  return (
    <div className="flex h-5 items-center space-x-2 text-sm text-muted-foreground">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link
            href={link.path}
            className={`${
              pathName === link.path
                ? "font-medium text-indigo-500 hover:text-indigo-600 hover:border-b-indigo-600 dark:hover:text-indigo-400 dark:hover:border-b-indigo-400"
                : "hover:text-primary hover:border-b-muted-foreground"
            } border-b border-b-transparent`}
          >
            {link.label}
          </Link>
          {index < links.length - 1 ? <Separator orientation="vertical" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};
