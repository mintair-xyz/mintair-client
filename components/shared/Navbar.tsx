import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { IoWallet } from "react-icons/io5";

const work_sans = Work_Sans({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  let something = `p-6 w-full text-white ${work_sans.className}`;
  return (
    <nav className={something}>
      <ul className="flex items-center justify-evenly">
        <li className=" text-2xl font-medium">
          <Image src="./logoname.svg" alt="logo" width={150} height={150} />
        </li>
        <li className="">
          <input
            type="text"
            className=" bg-stone-900 w-96 rounded-md p-1"
            placeholder=" Search for items and collections "
          />
        </li>
        <li className=" flex gap-6 font-medium items-center">
          <a href="">Create Drop</a>
          <a href="">Docs</a>
          <div className="bg-emerald-500 p-2 rounded-md flex items-center text-black gap-1">
            <IoWallet />
            <a href="">Connect</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
