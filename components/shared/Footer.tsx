import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-6 py-8 text-white px-4 md:p-10 font-medium 2xl:px-40">
      <div className=" self-center md:self-start">
        <Image src="./logoname.svg" alt="logo" width={150} height={150} />
      </div>
      <div className=" flex justify-between md:gap-24 text-xl">
        <div className="">Learn</div>
        <div>Get Started</div>
        <div className=" flex flex-col ">
          <div>Resources</div>
          <div className=" text-sm font-normal gap-3">
            <div>About</div>
            <div>Careers</div>
            <div>Email us</div>
            <div>Contact support</div>
            <div>Cookie preferences</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
