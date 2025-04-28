import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/links";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  return (
    <Button
      asChild
      variant={"outline"}
      size="icon"
      className="relative flex justify-center items-center"
    >
      <Link href={links.CART.href}>
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-blue-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
          9
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
