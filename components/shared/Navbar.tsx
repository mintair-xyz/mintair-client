import { useState } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { IoWallet } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const work_sans = Work_Sans({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  let something = `p-6 w-full text-white ${work_sans.className}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={something}>
        <ul className="flex items-center md:justify-evenly justify-between">
          <li className=" text-2xl font-medium">
            <Image src="./logoname.svg" alt="logo" width={150} height={150} />
          </li>
          <li className="md:flex hidden">
            <input
              type="text"
              className=" bg-stone-900 lg:w-96 w-48 lg:text-lg text-sm  rounded-md p-1"
              placeholder=" Search for items and collections "
            />
          </li>
          <li className="md:flex hidden gap-6 font-medium items-center">
            <a href="">Create Drop</a>
            <a href="">Docs</a>
            <div className="bg-emerald-500 p-2 rounded-md flex items-center text-black gap-1">
              <IoWallet />
              <a href="">Connect</a>
            </div>
          </li>
          <li className="md:hidden block">
            {isMenuOpen ? (
              <AiOutlineClose size={30} color={"#fff"} onClick={toggleMenu} />
            ) : (
              <RxHamburgerMenu size={30} color={"#fff"} onClick={toggleMenu} />
            )}
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="absolute grid place-content-center bg-black bg-opacity-90 py-5 w-full left-1/2 transform -translate-x-1/2 z-10">
          <input
            type="text"
            className=" bg-stone-900 w-52 my-2 text-sm  rounded-md p-1"
            placeholder=" Search for items and collections "
          />
          <li className="gap-3 text-white flex flex-col font-medium items-center">
            <a href="">Create Drop</a>
            <a href="">Docs</a>
            <div className="bg-emerald-500 p-2 rounded-md flex items-center text-black gap-1">
              <IoWallet />
              <a href="">Connect</a>
            </div>
          </li>
        </div>
      )}
    </>
  );
};

export default Navbar;
