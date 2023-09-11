"use client";
import { ElementRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export const NewOfferModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const modalRef = useRef<ElementRef<"dialog"> | null>(null);
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const eventTarget = e.target as Node;

      if (modalRef.current && isOpen && !modalRef.current.contains(eventTarget))
        return setIsOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);

    return () => document.removeEventListener("mousedown", closeMenu);
  }, [isOpen, setIsOpen]);

  type ValidationSchema = {
    userID: number;
    title: string;
    company: string;
    skills: string;
    salary: number;
    description: string;
    currency: string;
    date: string;
    location: string;
  };

  const validationSchema = z.object({
    title: z.string().min(5, { message: "Title is required" }),
    company: z.string().min(1, { message: "Company is required" }),
    skills: z.string().min(1, { message: "Skills is required" }),
    salary: z.string().min(1, { message: "Salary is required" }),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters long" }),
    currency: z.string().min(1, { message: "Currency is required" }),
    location: z.string().min(2, { message: "Location is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver<any>(validationSchema),
  });

  const onSubmit = async (data: ValidationSchema) => {
    const response = await fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        user_id: Math.floor(Math.random() * 100000),
        title: data.title,
        company: data.company,
        description: data.description,
        skills: data.skills.split(" "),
        salary: +data.salary,
        currency: data.currency,
        location: data.location,
      }),
    }).then((res) => res.json());
    reset();
    setIsOpen(false);
    console.log(response);
  };

  return (
    <>
      {isOpen && (
        <div
          className={
            "absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/70"
          }
        >
          <dialog
            ref={modalRef}
            open
            className={
              "text-text px-4 bg-neutral-800 flex flex-col items-center py-4 gap-4 rounded-xl"
            }
          >
            <p className={"text-xl font-bold"}>Add new job offer!</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={"flex flex-col gap-4 pb-4"}
            >
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  className="form-input"
                  placeholder="Type title of offer"
                  type="text"
                  {...register("title")}
                />
                <span>{errors.title?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="form-input"
                  placeholder="Type description of offer"
                  {...register("description")}
                />
                <span>{errors.description?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  className="form-input"
                  placeholder="Type your company name"
                  type="text"
                  {...register("company")}
                />
                <span>{errors.company?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="salary">Salary</label>
                <input
                  id="salary"
                  className="form-input"
                  placeholder="Salary"
                  type="number"
                  min={1}
                  {...register("salary")}
                />
                <span>{errors.salary?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="currency">Currency</label>
                <input
                  id="currency"
                  className="form-input"
                  placeholder="Currency"
                  type="text"
                  {...register("currency")}
                />
                <span>{errors.currency?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="skills">Skills</label>
                <input
                  id="skills"
                  className="form-input"
                  placeholder="Type skills of offer"
                  type="text"
                  {...register("skills")}
                />
                <span>{errors.skills?.message}</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  className="form-input"
                  placeholder="Type location"
                  type="text"
                  {...register("location")}
                />
                <span>{errors.location?.message}</span>
              </div>
              <button className={"bg-primary w-full rounded-xl py-2 mt-2"}>
                Add
              </button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};
