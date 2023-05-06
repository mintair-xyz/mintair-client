const Hero = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src={"/hero.svg"} />
        <div className="absolute top-[25%] m-10">
          <div className="flex items-center gap-4">
            <img src={"/air_logo.svg"} />
            <p className=" text-white text-5xl font-medium">AZUKI</p>
          </div>
          <p className="my-3 text-white">
            A brand for the metaverse. By the community.
          </p>
          <p className="bg-[#2ABC7F] w-fit p-2 rounded-md font-semibold text-md py-1">
            Connect Wallet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
