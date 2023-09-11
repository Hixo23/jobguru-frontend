"use client";

import { SingleOfferType } from "@/data /data";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";

export const OfferItem = ({
  id,
  description,
  skills,
  title,
  salary,
  company,
}: SingleOfferType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex px-4 justify-between bg-neutral-700 md:w-3/4 mx-auto cursor-pointer ${
          !isOpen && "my-4 py-2 rounded-xl"
        } pt-2 pb-2 items-center text-text rounded-t-2xl`}
      >
        <section className={"flex flex-col gap-2 text-sm"}>
          <p className={"text-2xl font-bold"}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </p>
          <div>
            <p className={"flex gap-2 items-center"}>
              <BsFillBuildingFill /> <span>{company}</span>
            </p>
          </div>
        </section>
        <section className={"flex flex-col gap-2 items-end"}>
          <p className={"text-2xl text-accent"}>{salary}zł</p>
          <div className={"flex gap-2"}>
            {skills.map((skill, i) => (
              <SkillItem key={i} skillName={skill} />
            ))}
          </div>
        </section>
      </div>
      {isOpen && (
        <section
          className={
            "bg-neutral-700 mx-auto md:w-3/4 px-4  pb-4 flex flex-col gap-2 text-text text-lg mb-4 rounded-b-2xl transition-all duration-150"
          }
        >
          <hr className="border-gray-400 my-2" />
          <p className={"text-2xl font-bold"}>Description</p>
          <hr className="border-gray-400 mt-2" />
          <p>{description}</p>
        </section>
      )}
    </>
  );
};

const SkillItem = ({ skillName }: { skillName: string }) => {
  return <p className={"p-2 rounded-xl bg-neutral-800 text-sm"}>{skillName}</p>;
};
