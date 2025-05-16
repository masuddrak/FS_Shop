"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}admin/login`,
        userInfo,
        { withCredentials: true }
      );
      const saveUser = {
        token: data.token,
        id: data.id,
        name: data.user.name,
      };
      if (data.status) {
        localStorage.setItem("authInfo", JSON.stringify(saveUser));
        router.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data.message);
      } else {
        console.log("An unexpected error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px] mx-auto  text-black bg-white p-4 shadow-2xl space-y-4"
    >
      <div>
        <input
          {...register("email", {
            required: "This field is requird",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          className="w-full border-[1px] border-black p-2 outline-0"
          placeholder="Enter Email"
        />
        {errors.email?.message && (
          <span className="text-red-600">{errors.email?.message}</span>
        )}
      </div>
      <div>
        <input
          {...register("password", {
            required: "This field is requird",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            maxLength: {
              value: 20,
              message: "Password must be at most 20 characters long",
            },
          })}
          type="password"
          className="w-full border-[1px] border-black p-2  outline-0"
          placeholder="Enter Password"
        />
        {errors.password?.message && (
          <span className="text-red-600">{errors.password?.message}</span>
        )}
      </div>

      <button className="primary_bg w-full p-2 text-center">Login</button>
    </form>
  );
};
export default Login;
