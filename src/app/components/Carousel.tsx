import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <div className="relative w-4/5 overflow-hidden after:clear-both after:block after:content-['']">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Las puertas del mundo a tu alcance</h5>
            <p className="inline-block w-auto underline hover:font-bold">
              <Link to={`/search`}>Buscar cursos</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
