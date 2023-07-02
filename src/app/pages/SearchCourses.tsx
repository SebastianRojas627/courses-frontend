import { Title } from "../components/Title";
import { AppLayout } from "../layouts/AppLayout";
import { courseInfor } from "../../data/data";
import { CourseCard } from "../components/CourseCard";

export const SearchCourses = () => {
  return (
    <>
      <AppLayout>
        <Title title="Los mejores Cursos:" />
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courseInfor.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              buttonText={"Agregar"}
            />
          ))}
        </div>
      </AppLayout>
    </>
  );
};
