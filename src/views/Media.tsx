import { MediaCard } from "components";
import logo from "icons/logo-with-text.svg";
const projectsData = [
  {
    title: "Wallet Credit Score Live on Injective",
    description:
      "BitNeuron has launched the wallet credit score APIs on Injective with NFTs, SBTs and more on the roadmap!",
    imgSrc: "images/injective-logo.png",
    href: "https://wiki.bitneuron.org/intro/news/injective-hackathon-spring-2023",
    time: "May 2023",
    author: "BitNeuron Foundation",
    avatar: logo,
  },
  {
    title: "Revolutionizing the Blockchain with AI",
    description: "How BitNeuron is democratizing AI and rebuilding Web2 on-chain",
    imgSrc: "/images/aggregation.png",
    href: "https://wiki.bitneuron.org/intro/web3-ai-layer-in-rescue/democratize-ai-onchain",
    time: "Spring 2023",
    author: "BitNeuron Foundation",
    avatar: logo,
  },
];
const Media = () => {
  return (
    <>
      <div className="px-6 sm:px-12 lg:pl-32 py-14 md:py-20 text-center mb-8">
        <h1 className="text-4xl lg:text-7xl text-indigo dark:text-white font-bold mb-10">
          BitNeuron Media
        </h1>
        <p className="text-grey dark:text-white lg:text-lg mb-2">
          Learn more about BitNeuron&apos;s press coverage
        </p>
      </div>
      <div className="flex flex-wrap md:px-20 justify-center">
        {projectsData.map((d, index) => (
          <MediaCard
            key={d.title + index}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
            time={d.time}
            avatar={d.avatar}
          />
        ))}
      </div>
    </>
  );
};

export default Media;
