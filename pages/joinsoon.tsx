import { useState } from "react";
import Image from "next/image";

const joinsoon = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  console.log(form);

  return (
    <div className="bg-[#2B2B2B] flex justify-center items-center flex-col py-10 w-screen h-screen px-10">
      <div>
        <Image src="./logoname.svg" alt="logo" width={250} height={250} />
      </div>
      <div className="mb-3 lg:w-96 w-full">
        <label className="block mb-2 mt-5 text-sm font-medium text-[#A259FF]">
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="bg-[#1e1d1e]  text-white opacity-50 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          onChange={(e) => {
            setForm({
              ...form,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-5 lg:w-96 w-full">
        <label className="block mb-2 text-sm font-medium text-[#A259FF]">
          Email:
        </label>
        <input
          type="text"
          placeholder="Enter your email address"
          required
          className="bg-[#1e1d1e] text-white opacity-50 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="lg:w-96 w-full grid place-content-center mt-2">
        <button className="inline-block shrink-0 rounded-[17px] border bg-[#A259FF] border-[#6e3daf] px-8 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#2ABC7F] focus:outline-none">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default joinsoon;
