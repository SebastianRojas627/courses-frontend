import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { Title } from "../components/Title";
import { AppLayout } from "../layouts/AppLayout";
import { useStore } from "../../context/ContextProvider";
import { CourseCard } from "../components/CourseCard";
import { Link } from "react-router-dom";

export const Dashboard = ({ userCourses }) => {
  const { auth } = useStore();

  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <>
      <AppLayout>
        <Carousel />
        <Title title="Continuemos aprendiendo!" />
        {userCourses.length !== 0 ? (
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userCourses.map((course) => (
              <CourseCard
                key={course.id}
                img={course.img}
                title={course.title}
                description={course.description}
              />
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
