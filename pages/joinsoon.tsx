import { useState } from "react";
import Image from "next/image";

const Joinsoon = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  console.log(form);

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-12 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 grid place-items-center">
          <Image src="./logoname.svg" alt="logo" width={250} height={250} />
          <p className="my-8 text-gray-500 text-center lg:w-[80%] w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>

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
            <label className="block mb-2 text-sm font-medium text-secondary">
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
            <button className="inline-block shrink-0 rounded-[17px] border-2 bg-secondary border-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary focus:outline-none">
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Joinsoon;
