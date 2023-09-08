import Image from "next/image";
import Search from "./Search";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="px-6 py-2 grid grid-flow-col w-full items-center grid-cols-3">
        <div className="flex items-center gap-2 col-span-1 mr-auto">
          <Image src={"/docs.svg"} width={50} height={50} alt="docs" />
          <h1 className="text-xl text-secondary font-medium">Docs</h1>
        </div>
        <div className="col-span-1 mx-auto w-full">
          <Search />
        </div>
        <div className="col-span-1 ml-auto">
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
