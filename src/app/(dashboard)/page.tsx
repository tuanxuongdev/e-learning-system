import CourseItem from "@/components/Course/CourseItem";
import { CourseGrid } from "@/components/common";
import Heading from "@/components/typography/Heading";

export default async function Home() {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
}
