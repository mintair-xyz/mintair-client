import { useState } from "react";
import Card from "./Card";

const MainSection = () => {
  const menu = [
    "Nft",
    "Art",
    "DAO",
    "Gaming",
    "Music",
    "Collectibles",
    "DeFi",
    "Metaverse",
  ];
  const [active, setactive] = useState(true);
  const btnactive =
    "-mb-px text-xl border-b border-current p-4 text-[#2ABC7F] ";
  const btninactive = "-mb-px  text-xl p-4 hover:text-[#2ABC7F]";

  const handleMint = () => {
    if (active) {
      setactive(false);
    }
  };
  const handleAirdrop = () => {
    if (!active) {
      setactive(true);
    }
  };
  console.log(active);
  return (
    <div className="bg-black py-10 px-10">
      <div className="flex justify-between items-center">
        <nav className="text-white flex text-sm font-medium">
          <div
            className={`${active ? btnactive : btninactive}`}
            onClick={handleAirdrop}
          >
            Airdrop
          </div>
          <div
            className={`${!active ? btnactive : btninactive}`}
            onClick={handleMint}
          >
            Mint
          </div>
        </nav>
        <div className="flex mx-3">
          <p className="bg-[#2ABC7F] mx-3 w-fit p-2 rounded-md font-semibold text-md py-1">
            All chains
          </p>
          <p className="bg-[#2ABC7F] w-fit p-2 rounded-md font-semibold text-md py-1">
            View All
          </p>
        </div>
      </div>
      <nav className="mt-5 text-white flex text-sm font-medium">
        <a href="" className="-mb-px text-md p-4 text-[#2ABC7F]">
          All
        </a>
        {menu.map((item, index) => (
          <a
            href=""
            className="-mb-px ml-8 text-md p-4 hover:text-[#2ABC7F]"
            key={index}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className=" flex mt-16 gap-10 justify-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MainSection;
