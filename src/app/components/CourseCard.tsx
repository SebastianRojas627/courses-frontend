export const CourseCard = ({ course, addCourse, setUserCourses }) => {
  return (
    <>
      <div className="bg-gray-200 border border-gray-300 shadow-md rounded-md overflow-hidden inline-block m-5">
        <img
          src={course.img}
          alt="Card"
          className="w-full h-auto object-cover rounded"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {course.title}
          </h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={addCourse(course)}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
