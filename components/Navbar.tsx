import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeMenu from "./ThemeMenu";

import Toggler from "./Toggler";


const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10 ">
        {/* left */}
        {/* <SidebarTrigger/> */}
       <Toggler/>
        {/* right side */}
        <div className=" flex items-center gap-4">
          <Link href="/" className="uppercase tracking-wide">DashBoard</Link>

        {/* theme changer */}
          <ThemeMenu/>
          
           {/* user menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2"/>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
                LogOut
              </DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
