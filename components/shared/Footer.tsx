import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex justify-between text-white p-10 font-medium">
      <div>
        <Image src="./logoname.svg" alt="logo" width={150} height={150} />
      </div>
      <div className=" flex justify-between gap-24 text-xl">
        <div className="">Learn</div>
        <div>Get Started</div>
        <div>
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
