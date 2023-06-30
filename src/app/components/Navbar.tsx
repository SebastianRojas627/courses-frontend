import { Link, useLocation } from "react-router-dom";
import userImage from "../../assets/noun-user-5540499.svg";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between bg-gray-600 text-white p-4">
      <div className="text-xl font-bold">Online courses</div>

      <div className="space-x-4">
        <Link
          className={`px-4 py-2 rounded text-white hover:font-bold ${
            pathname === "/home" ? "font-bold" : ""
          }`}
          to={`/home`}
        >
          Mis Cursos
        </Link>
        <Link
          className={`px-4 py-2 rounded text-white hover:font-bold ${
            pathname === "/search" ? "font-bold" : ""
          }`}
          to={`/search`}
        >
          Buscar Cursos
        </Link>
      </div>

      <div>
        <svg
          xmlns={userImage}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </nav>
  );
};
