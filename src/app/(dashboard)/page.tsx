import CourseItem from "@/components/Course/CourseItem";
import { CourseGrid } from "@/components/common";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.actions";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    email_address: "user@example.com",
    username: "vantuan01",
  });
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
};

export default page;
