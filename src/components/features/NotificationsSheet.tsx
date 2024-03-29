"use client";

import { FunctionComponent } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/Sheet";

type NotificationsSheetProps = {
  onModalOpen?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: JSX.Element;
  label: string;
  notifCount: number | undefined;
};

export const NotificationsSheet: FunctionComponent<NotificationsSheetProps> = ({
  onModalOpen,
  icon,
  label,
  notifCount,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          onClick={(event) => onModalOpen?.(event)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-md text-primary font-medium hover:bg-secondary"
        >
          <section className="flex items-center gap-3">
            {icon}
            <p className="text-sm">{label}</p>
          </section>

          {notifCount && <p className="text-xs font-bold text-red-500">{notifCount}</p>}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
      </SheetContent>
    </Sheet>
  );
};
