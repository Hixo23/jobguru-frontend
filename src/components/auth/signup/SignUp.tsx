"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export const SignUp = () => {
  const validationSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver<any>(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
  };
  return (
    <main className="w-screen h-screen bg-background flex justify-center items-center text-text">
      <div className="w-96  pb-6 bg-neutral-800 rounded-xl">
        <h1 className="text-center mt-12 text-2xl font-medium">Hello!</h1>
        <p className="text-center text-gray-400 my-2 mx-auto">
          Sign in or sign up to continue
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center mt-2 gap-4"
          action=""
        >
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="form-input"
              placeholder="Type your nickname"
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <span className={"text-red-500"}>{errors.username.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input"
              placeholder="Type your email address"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <span className={"text-red-500"}>{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              placeholder="Type your password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className={"text-red-500"}>{errors.password.message}</span>
            )}
          </div>
          <button className="bg-primary px-12 py-2 rounded-xl mt-4">
            Sign up
          </button>
        </form>
        <p className={"text-center mb-2 mt-8 text-gray-400"}>
          Already have an account?{" "}
          <Link className={`text-text`} href={"/signin"}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};
