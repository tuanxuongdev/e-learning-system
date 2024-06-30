import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconClock, IconEye, IconStar } from "../icons";

const courseInfo = [
  {
    title: "3000",
    icon: (className?: string) => <IconEye className={className}></IconEye>,
  },
  {
    title: "5.0",
    icon: (className?: string) => <IconStar className={className}></IconStar>,
  },
  {
    title: "30h25p",
    icon: (className?: string) => <IconClock className={className}></IconClock>,
  },
];

const CourseItem = () => {
  return (
    <div className="bg-white dark:bg-grayDarker dark:border-opacity-10 border p-4 border-gray-200 rounded-2xl ">
      <Link href="#" className="block h-[180px] relative">
        <Image
          src="https://images.unsplash.com/photo-1719216325263-9070d79336c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg "
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />

        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 bg-green-500 text-xs text-white font-medium z-10">
          NEW
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3">
          Khóa học NextJS Pro - Xây dựng E-Learning system hoàn chỉnh{" "}
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
          {courseInfo.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className=" text-primary ml-auto text-base font-bold">
            799.000
          </span>
        </div>
      </div>
      <Link
        href="#"
        className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseItem;
