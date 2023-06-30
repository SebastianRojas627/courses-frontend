export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
      <div className="pt-40">
        <header className="text-2xl text-gray-700 text-center my-8">
          {title}
        </header>
      </div>
      {children}
    </>
  );
};
