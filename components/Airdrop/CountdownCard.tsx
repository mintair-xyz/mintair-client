import { BiWalletAlt } from "react-icons/bi";
import { Space_Mono } from "next/font/google";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"], weight: "400" });
const space_mono = Space_Mono({ subsets: ["latin"], weight: "400" });

const CountdownCard = () => {
  return (
    <div
      className={` w-72 bg-[#404040] p-8 flex flex-col gap-2 rounded-3xl ${space_mono.className}`}
    >
      <div>Airdrop starts in</div>
      <div className="flex">
        <div className=" w-1/3">
          <p className="text-3xl font-semibold"> 59 : </p>
          <p className=" text-xs">Hours</p>
        </div>
        <div className=" w-1/3">
          <p className="text-3xl font-semibold"> 59 :</p>
          <p className=" text-xs">Minutes</p>
        </div>
        <div className=" w-1/3">
          <p className="text-3xl font-semibold"> 59 </p>
          <p className=" text-xs">Seconds</p>
        </div>
      </div>
      <div
        className={`flex items-center bg-[#A259FF] rounded-xl justify-center font-normal gap-2 px-4 py-2 drop-shadow-lg ${work_sans.className}`}
      >
        <BiWalletAlt /> Whtielist Wallet
      </div>
    </div>
  );
};

export default CountdownCard;
