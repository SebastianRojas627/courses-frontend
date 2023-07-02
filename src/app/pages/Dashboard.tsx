import { Carousel } from "../components/Carousel";
import { Title } from "../components/Title";
import { AppLayout } from "../layouts/AppLayout";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { UserCourse } from "../components/UserCourse";

export const Dashboard = () => {
  const userCourses = useContext(UserContext);

  return (
    <>
      <AppLayout>
        <Carousel />
        <Title title="Continuemos aprendiendo!" />

        {userCourses.length !== 0 ? (
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userCourses.map((course) => (
              <UserCourse key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl">Vacio por aqui...</h3>
            <p className="inline-block w-auto underline hover:font-bold">
              <Link to={`/search`}>Agregar cursos</Link>
            </p>
          </div>
        )}
      </AppLayout>
    </>
  );
};
