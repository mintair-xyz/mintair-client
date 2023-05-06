import Image from "next/image";

const Card = () => {
  return (
    <div className=" w-72 flex flex-col items-center border-2 p-5 rounded-xl border-[#2ABC7F] bg-zinc-950">
      <div className=" text-cente relative -top-16 h-5">
        <Image src="./cardimg.svg" alt="logo" width={80} height={80} />
      </div>
      <div className=" text-[#2ABC7F] text-center text-xl">suiswap</div>
      <div className="text-white">
        Swap platform on Sui blockchain. Every XP you get in CREW3 can be used
        to redeem Suiswap token airdrops
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
