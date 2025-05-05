"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { links } from "@/utils/links";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const {replace} = useRouter()
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${links.PRODUCTS.href}?${params.toString()}`)
  }, 500);
  return (
    <div className="w-96">
      <Input
        placeholder="search..."
        type="search"
        className="dark:bg-muted"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default NavSearch;
