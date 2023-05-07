import Image from "next/image";
import Link from "next/link";

const LaunchingSoon = () => {
  return (
    <div className="w-screen h-screen p-10 bg-[#2B2B2B] text-white flex flex-col items-center justify-center gap-8">
      <div>
        <Image src="./logoname.svg" alt="logo" width={250} height={250} />
      </div>
      <div className=" text-lg font-semibold text-neutral-500">
        Want to increase your chances of receiving airdrops? MintAir helps you
        stay organized and up-to-date with all your airdrop opportunities. With
        on-chain tracking and custom alerts, you&apos;ll never miss out on free
        tokens again.
      </div>
      <Link href="/joinsoon">
        <button className=" bg-[#A259FF] border-[#6e3daf] p-2 px-4 rounded-lg font-medium">
          Join the waitlist!
        </button>
      </Link>
    </div>
  );
};

export default LaunchingSoon;
