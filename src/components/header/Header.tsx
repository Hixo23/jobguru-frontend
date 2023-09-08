import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-screen h-16 text-text flex items-center px-6 ">
      <Link className="font-bold text-2xl" href={"/"}>
        Jobguru
      </Link>
    </header>
  );
};
