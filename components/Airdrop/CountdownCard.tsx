import { BiWalletAlt } from "react-icons/bi";

const CountdownCard = () => {
  return (
    <div className=" w-72 bg-[#404040] p-8 flex flex-col gap-2 rounded-3xl">
      <div>Airdrop starts in</div>
      <div className="flex">
        <div className=" w-1/3">
          <p className="text-4xl font-semibold"> 59 : </p>
          Hours
        </div>
        <div className=" w-1/3">
          <p className="text-4xl font-semibold"> 59 :</p>
          Minutes
        </div>
        <div className=" w-1/3">
          <p className="text-4xl font-semibold"> 59</p>
          Seconds
        </div>
      </div>
      <div className=" flex items-center bg-[#A259FF] rounded-xl justify-center font-normal gap-2 px-4 py-2 drop-shadow-lg">
        <BiWalletAlt /> Whtielist Wallet
      </div>
    </div>
  );
};

export default CountdownCard;
