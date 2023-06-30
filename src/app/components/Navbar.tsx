import userImage from "../../assets/noun-user-5540499.svg";

export const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-lg">
                Online Courses
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={userImage}
                alt="user"
                width={200}
                height={200}
                className="h-12 w-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
