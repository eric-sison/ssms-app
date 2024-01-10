import { FunctionComponent } from "react";
import { SidebarItem } from "./SidebarItem";
import { UserMenu } from "../features/UserMenu";
import { Separator } from "../ui/Separator";
import { SidebarMenuTitle } from "./SidebarMenuTitle";
import {
  FileStack,
  FilePieChart,
  FileSignature,
  Tags,
  UserCog,
  Wrench,
  Hammer,
  FolderSymlink,
} from "lucide-react";

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="h-full border-r w-64 shrink-0 space-y-10">
      <div className="px-5 mt-7">
        <UserMenu />
      </div>

      <div className="space-y-7">
        <ul className="space-y-1 px-2">
          <div className="pl-4 pb-1">
            <SidebarMenuTitle title="Administration" />
          </div>

          <SidebarItem
            targetPath="/dashboard"
            icon={<FilePieChart className="w-5 h-5" />}
            label="Dashboard"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/reports"
            icon={<FileSignature className="w-5 h-5" />}
            label="Reports"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/tickets"
            icon={<Tags className="w-5 h-5" />}
            label="Tickets"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/profile"
            icon={<UserCog className="w-5 h-5" />}
            label="My Profile"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/settings"
            icon={<Wrench className="w-5 h-5" />}
            label="Settings"
            notifCount={undefined}
          />
        </ul>

        <div className="px-7">
          <Separator className="opacity-70" />
        </div>

        <ul className="space-y-1 px-2">
          <div className="pl-4 pb-1">
            <SidebarMenuTitle title="Manage" />
          </div>

          <SidebarItem
            targetPath="/support-types"
            icon={<Hammer className="w-5 h-5" />}
            label="Support Types"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/categories"
            icon={<FolderSymlink className="w-5 h-5" />}
            label="Categories"
            notifCount={undefined}
          />

          <SidebarItem
            targetPath="/sub-categories"
            icon={<FileStack className="w-5 h-5" />}
            label="Sub Categories"
            notifCount={undefined}
          />
        </ul>
      </div>
    </aside>
  );
};
