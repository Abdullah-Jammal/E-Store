"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarComponent = () => {
  const path_url = usePathname();
  console.log(path_url)
  return (
    <aside>
      {adminLinks.map((link) => {
        const active_page = link.href === path_url
        return (
          <Button
            key={link.href}
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={active_page ? "default" : "secondary"}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default SideBarComponent;
