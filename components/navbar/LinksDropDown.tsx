import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Button } from "../ui/button";
import { dropDownMenu } from "@/utils/links";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import SignOut from "./SignOut";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <SignedOut>
        <DropdownMenuItem className="flex flex-col gap-4">
            <SignInButton mode="modal">
              <Button className="w-full">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="w-full" variant={"outline"}>
                Sign Up
              </Button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {dropDownMenu.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
