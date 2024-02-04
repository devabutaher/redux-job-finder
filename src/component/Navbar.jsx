import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
      <Link to={"/"} className="flex gap-4">
        <img src="/vite.svg" />
        <h1 className="text-3xl text-white">
          <span className="font-bold">Job</span> Finder
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
