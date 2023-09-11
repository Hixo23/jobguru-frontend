import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-screen h-16 text-text flex items-center px-6 mb-24 justify-between ">
      <Link className="font-bold text-2xl" href={"/"}>
        Jobguru
      </Link>
      <button
        className="z-10 md:hidden before:absolute w-10 h-4 before:content-[''] before:bg-white before:w-6 before:h-[2px]   after:absolute  after:content-[''] after:bg-white after:w-6 after:h-[2px]  after:top-6 mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="before:absolute before:top-10 before:content-[''] before:bg-white before:w-6 before:h-[2px]  after:absolute  after:content-['']"></span>
      </button>
      <nav
        className={`flex md:flex-row flex-col md:w-auto md:h-auto w-screen h-screen bg-background md:bg-transparent absolute top-0 left-0 md:justify-between justify-center items-center transition-transform duration-150 md:translate-x-0 md:relative gap-4 ${
          isOpen ? "translate-x-0 overflow-hidden" : "-translate-x-[100%]"
        }`}
      >
        <Link className={"nav-item"} href="/signin">
          Sign in
        </Link>
        <Link className={"nav-item"} href="/signup">
          Sign up
        </Link>
      </nav>
    </header>
  );
};
