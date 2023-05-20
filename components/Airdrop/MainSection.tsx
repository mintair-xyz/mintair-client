import CountdownCard from "./CountdownCard";
import AmountCard from "./AmountCard";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";
import { Space_Mono } from "next/font/google";
import { Work_Sans } from "next/font/google";

const space_mono = Space_Mono({ subsets: ["latin"], weight: "400" });
const work_sans = Work_Sans({ subsets: ["latin"], weight: "400" });

type link = {
  Etherscan?: string;
  web?: string;
};

type data = {
  fund: number;
  status: string;
  description: string;
  links: link;
  tags: string[];
  amount: number;
};

let example: data = {
  fund: 20000,
  status: "Confirm Airdrop",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    inventore deserunt a incidunt? Vero sunt obcaecati facere pariatur
    maxime. Ex unde ut eum similique optio assumenda esse velit nihil
    dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Corrupti aliquam enim sint obcaecati officiis delectus unde mollitia
    vel nemo temporibus? Illum ipsum pariatur, itaque quae cupiditate
    tempore ab! Inventore, dolorem?`,
  links: { Etherscan: "https://www.google.com", web: "www.youtube.com" },
  tags: ["Animation", "Illustration", "Moon", "Layer 1"],
  amount: 1000,
};

const MainSection = () => {
  const tagclass = " bg-neutral-700 rounded-xl px-5 py-1";
  return (
    <div className=" md:px-64 w-full flex">
      <div className="flex flex-col gap-3">
        <div className={` font-medium ${space_mono.className}`}>
          Fund Raised : ${example.fund}
        </div>
        <div className="px-3 py-2 border-2 w-fit rounded-xl">
          <div className={`flex items-center gap-1 ${work_sans.className}`}>
            <RiMoneyDollarCircleLine className=" w-6 h-6" />
            Confirm Airdrop
          </div>
        </div>
        <div className=" w-3/5">
          <div className={` text-[#858584] ${space_mono.className}`}>
            Description
          </div>
          <div className={`${work_sans.className}`}>{example.description}</div>
        </div>
        <div className=" flex flex-col gap-1">
          <div className={` text-[#858584] ${space_mono.className}`}>
            More Details
          </div>
          <a
            href={example.links.Etherscan}
            className=" flex items-center gap-2"
          >
            <SlGlobe /> View on EtherScan
          </a>
          <a href={example.links.web} className=" flex items-center gap-2">
            <SlGlobe /> View Original
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" text-[#858584]">Tags</div>
          <div className=" flex gap-4">
            {example.tags.map((tag, id) => {
              return <div className={tagclass}>{tag}</div>;
            })}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-6">
        <CountdownCard />
        <AmountCard />
      </div>
    </div>
  );
};

export default MainSection;
