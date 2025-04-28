import React from "react";
import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <div className="w-96">
      <Input placeholder="search..." type="search" className="dark:bg-muted" />
    </div>
  );
};

export default NavSearch;
