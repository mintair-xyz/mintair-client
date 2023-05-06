import Image from "next/image";
import Link from "next/link";

const LaunchingSoon = () => {
  return (
    <div className="w-screen h-screen p-10 bg-black text-white flex flex-col items-center justify-center gap-6">
      <div>
        <Image src="./logoname.svg" alt="logo" width={250} height={250} />
      </div>
      <div className=" text-lg font-semibold text-neutral-500">
        Want to increase your chances of receiving airdrops? MintAir helps you
        stay organized and up-to-date with all your airdrop opportunities. With
        on-chain tracking and custom alerts, you'll never miss out on free
        tokens again.
      </div>
      <Link href="/joinsoon">
        <button className=" bg-emerald-500 p-2 rounded-lg font-medium">
          Join the waitlist!
        </button>
      </Link>
    </div>
  );
};

export default LaunchingSoon;
