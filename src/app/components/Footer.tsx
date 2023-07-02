export const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="bg-gray-800 text-white py-4 text-center w-full">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
