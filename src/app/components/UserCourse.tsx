export const UserCourse = ({ course }) => {
  return (
    <>
      <div
        className="hover:cursor-pointer bg-gray-200 border border-gray-300 shadow-md rounded-md overflow-hidden inline-block m-5"
        onClick={() => console.log(course)}
      >
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
        </div>
      </div>
    </>
  );
};
