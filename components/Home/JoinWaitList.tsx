import { useState } from "react";
import Image from "next/image";

const JoinWaitList = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  console.log(form);

  return (
    <div>
      <section className="relative flex flex-wrap h-screen lg:items-center bg-[#2B2B2B]">
        <div className="w-full px-12 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 grid place-items-center">
          <Image src="./logoname.svg" alt="logo" width={250} height={250} />
          <p className="my-8 text-gray-500 text-center lg:w-[80%] w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>

          <div className="relative mb-3 lg:w-96 w-full">
            <input
              id="name"
              type="text"
              required
              className=" border-b py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors w-full bg-transparent peer text-white"
              autoComplete="off"
              onChange={(e) => {
                setForm({
                  ...form,
                  name: e.target.value,
                });
              }}
            />
            <label
              htmlFor="name"
              className=" absolute left-0 top-1 text-[#868186] cursor-text peer-focus:text-sm peer-focus:-top-4 peer-focus:text-secondary transition-all"
            >
              Name
            </label>
          </div>
          <div className="relative mt-6 mb-3 lg:w-96 w-full">
            <input
              id="email"
              type="text"
              placeholder=" "
              required
              className=" border-b py-1 focus:outline-none focus:border-secondary focus:border-b-2 transition-colors w-full bg-transparent peer text-white"
              autoComplete="off"
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
            />
            <label
              htmlFor="email"
              className=" absolute left-0 top-1 text-[#868186] cursor-text peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-secondary transition-all"
            >
              Email
            </label>
          </div>
          <div className="lg:w-96 w-full grid place-content-center mt-2">
            <button className="inline-block shrink-0 rounded-[17px] border-2 bg-secondary border-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary focus:outline-none">
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 ">
          <img
            alt="Welcome"
            src="/background.svg"
            className="absolute object-cover w-full lg:top-56"
          />
        </div>
      </section>
    </div>
  );
};

export default JoinWaitList;
