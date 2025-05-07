"use client";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

const SignOut = () => {
  function handelLogOut() {
    toast("Signing out ...");
  }

  return (

      <SignOutButton>
        <Link href={"/"} className="w-full text-left" onClick={handelLogOut}>
          Sign Out
        </Link>
      </SignOutButton>

  );
};

export default SignOut;
