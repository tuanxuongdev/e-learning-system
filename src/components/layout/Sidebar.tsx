import React from "react";
import { menuItems } from "@/constants";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/types";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 ">
      <Link href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </Link>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            icon={item.icon}
            title={item.title}
          ></MenuItem>
        ))}
      </ul>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
