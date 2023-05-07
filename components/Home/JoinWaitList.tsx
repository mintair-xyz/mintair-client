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

          <div className="relative z-0 mb-3 lg:w-96 w-full">
            <input
              id="name"
              type="text"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mt-6 mb-3 lg:w-96 w-full">
            <input
              id="email"
              type="text"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
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
