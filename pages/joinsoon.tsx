import { useState } from "react";
import Image from "next/image";

const joinsoon = () => {
  return (
    <div className="bg-black flex justify-center items-center flex-col py-10 w-screen h-screen px-10">
      <div>
        <Image src="./logoname.svg" alt="logo" width={250} height={250} />
      </div>
      <div className="mb-3 lg:w-96 w-full">
        <label className="block mb-2 mt-5 text-sm font-medium text-[#2ABC7F]">
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="bg-white border border-[#2ABC7F] text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none"
        />
      </div>
      <div className="mb-5 lg:w-96 w-full">
        <label className="block mb-2 text-sm font-medium text-[#2ABC7F]">
          Email:
        </label>
        <input
          type="text"
          placeholder="Enter your email address"
          required
          className="bg-white border border-[#2ABC7F] text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none"
        />
      </div>
      <div className="lg:w-96 w-full grid place-content-center mt-2">
        <button className="inline-block shrink-0 rounded-md border border-[#2ABC7F] bg-[#2ABC7F] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#2ABC7F] focus:outline-none">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default joinsoon;
