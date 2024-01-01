import { Apps, Publish, Lan } from "@mui/icons-material";
import { partners } from "config/constants/constant";
import { useState } from "react";

const tagTypes = ["App", "Data Publisher", "Chain"];

const Partner = ({ name, tag, image, bio }, index) => (
  <div key={index} className="flex flex-col shadow-xl bg-gradient-effect-3 rounded-2xl p-4 h-full">
    <div className="flex items-center py-4">
      <img width={35} height={35} src={image} alt={name} />

      <div className="text-[16px] ml-4 font-bold sm:text-2xl leading-tight">{name}</div>
    </div>
    <div className="flex items-center mb-4">
      {
        {
          App: <Apps />,
          "Data Publishers": <Publish />,
          Chains: <Lan />,
        }[tag]
      }
      <div className="ml-1">{tag}</div>
    </div>
    <div className="my-auto">{bio}</div>
  </div>
);

const Ecosystem = () => {
  const [tag, setTag] = useState(null);

  return (
    <div className="pt-16 max-w-7xl m-auto">
      {/* title */}
      <div className="text-center m-auto px-4 sm:px-16 lg:px-32 pt-6 sm:pt-12 lg:pt-18">
        <h1 id="title" className="text-[32px] font-semibold sm:text-6xl leading-tight">
          BitNeuron Ecosystem
        </h1>
      </div>
      <div className="pt-4 sm:pt-6 max-w-4xl mr-auto">
        <h2 className="text-[12px] font-semibold sm:text-xl mx-4 mt-4 sm:mb-2">
          Eric Chen, Injective Labs CEO
        </h2>
        <p className="text-[12px] font-light sm:text-lg mx-4">
          Artiticial intelligence is bringing about a true paradigm shift across all industries.
          BitNeuron integrating their novel AI network with Injective has the potential to
          fundamentally reshape the world of Web3 as we know it to be.
        </p>
      </div>
      <div className="pt-4 sm:pt-6 max-w-5xl ml-auto">
        <h2 className="text-[12px] font-semibold sm:text-xl mx-4 mt-4">
          Leal Ch, Co-founder of zkMe
        </h2>
        <p className="text-[12px] font-light sm:text-lg mx-4">
          BitNeuron, as an integrated Web3 native AI network, has an AI-driven data signal that can
          provide zkMe with more sources of data and signals to help us analyze and apply data more
          effectively. We believe that this collaboration will bring new ideas and practices to the
          application of on-chain data and user privacy protection.
        </p>
      </div>
      <div className="pt-4 sm:pt-6 max-w-4xl mr-auto">
        <h2 className="text-[12px] font-semibold sm:text-xl mx-4 mt-4 sm:mb-2">
          Jackson Li, Co-founder of 0xscope
        </h2>
        <p className="text-[12px] font-light sm:text-lg mx-4">
          As technology advances, AI will become even more important in shaping our future. BitNeuron
          team collaboration with industry leaders to apply AI to on-chain data is exciting and has
          the potential to revolutionize decentralized networks.
        </p>
      </div>
      <h2 className="text-[16px] text-center m-auto text-gray-light font-semibold sm:text-2xl mx-4 my-4 sm:m-0 sm:mt-16">
        Discover all the apps and projects in the BitNeuron ecosystem.
      </h2>
      <div className="flex sm:text-lg justify-center items-center mt-2 flex-col sm:flex-row">
        <div className="font-bold sm:text-xl">Sort by Tag:</div>
        <div
          onClick={() => setTag(null)}
          className={
            "ml-4 border rounded-3xl px-3 py-1 sm:px-6 mt-2 sm:mt-0" +
            (tag ? "border-white" : "border-white bg-white text-gray-dark")
          }
        >
          ALL
        </div>
        {tagTypes.map((tagType, index) => (
          <div
            key={index}
            onClick={() => (tag === tagType ? setTag(null) : setTag(tagType))}
            className={
              "ml-4 border rounded-3xl px-3 py-1 sm:px-6  mt-2 sm:mt-0" +
              (tagType === tag ? "border-white bg-white text-gray-dark" : "border-white")
            }
          >
            {tagType}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-10 place-items-center mt-4 sm:mt-6">
        {partners
          .filter(({ tag: partnerTag }) => !tag || partnerTag === tag)
          .map(({ name, tag, image, bio }, index) => Partner({ name, tag, image, bio }, index))}
      </div>
    </div>
  );
};
export default Ecosystem;
