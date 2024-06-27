import React from "react";
import IconPlay from "../icons/IconPlay";
import IconExplore from "../icons/IconExplore";
import { menuItems } from "@/constants";
import Link from "next/link";

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

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={url}
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary  hover:bg-primary hover:bg-opacity-10 transition-all "
      >
        {icon}
        {title}
      </Link>
    </li>
  );
}
export default Sidebar;
