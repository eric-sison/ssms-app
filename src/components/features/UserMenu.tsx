"use client";

import { FunctionComponent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";

export const UserMenu: FunctionComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full text-left text-sm rounded-md focus:ring-0 flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/mock/profile5.jpg" alt="@ecs" className="object-cover" />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <section className="w-full truncate">
          <h4 className="font-medium">Eric Sison</h4>
          <p className="text-primary/70 truncate">ericsison.dev@gmail.com</p>
        </section>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={10}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
