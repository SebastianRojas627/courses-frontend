import { SubmitHandler, useForm } from "react-hook-form";
import { AuthLayout } from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { AuthDispatchContext } from "../../context/AuthProvider";
import { useContext } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const setAuth = useContext(AuthDispatchContext);

  type User = {
    name: String;
    lastname: String;
    email: String;
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    setAuth(true);
    console.log(data);
    navigate("/");
  };

  const toLogin = () => {
    navigate("/auth/login");
  };

  return (
    <AuthLayout title="Create Account">
      <div className="bg-gray-200 p-6 rounded-md max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700">
              Name:
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="text-gray-700">
              Lastname:
            </label>
            <input
              placeholder="Last Name"
              {...register("lastname", { required: true })}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-700">
              Username:
            </label>
            <input
              placeholder="Username"
              {...register("username", { required: true })}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700">
              Password:
            </label>
            <input
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
          >
            Register
          </button>
        </form>
        <button
          className="mt-5 ml-2 text-gray-500 hover:text-gray-950"
          onClick={() => toLogin()}
        >
          Back
        </button>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
