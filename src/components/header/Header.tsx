import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-screen h-16 text-text flex items-center px-6 mb-24 justify-between ">
      <Link className="font-bold text-2xl" href={"/"}>
        Jobguru
      </Link>
        <nav className='flex gap-4'>
            <Link className={'nav-item'} href='/signin'>Sign in</Link>
            <Link className={'nav-item'} href='/signup'>Sign up</Link>
        </nav>
    </header>
  );
};
