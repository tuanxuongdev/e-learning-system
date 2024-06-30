import CourseItem from "@/components/Course/CourseItem";
import { CourseGrid } from "@/components/common";
import Heading from "@/components/typography/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  );
};

export default page;
