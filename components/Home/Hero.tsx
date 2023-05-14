import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <div className="bg-black w-full">
      <div className="relative">
        <img src={"/hero.svg"} className="w-full" />
        <div className="absolute top-[25%] lg:m-10 ml-10 lg:px-16 xl:px-32 2xl:px-36">
          <div className="flex items-center gap-4 w-full">
            <img src={"/air_logo.svg"} className=" w-10 md:w-auto " />
            <p className=" text-white md:text-5xl font-medium">AZUKI</p>
          </div>
          <p
            className={`my-3 text-white ${poppins.className} lg:text-lg text-md`}
          >
            A brand for the metaverse. By the community.
          </p>
          <p className="bg-[#2ABC7F] w-fit p-2 rounded-md font-semibold text-md py-1 px-6 hidden md:block">
            Connect Wallet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
