import { FunctionComponent } from "react";

type SidebarMenuTitleProps = {
  title: string;
};

export const SidebarMenuTitle: FunctionComponent<SidebarMenuTitleProps> = ({ title }) => {
  return (
    <span className="text-xs font-bold tracking-wider text-primary/60 uppercase">{title}</span>
  );
};
