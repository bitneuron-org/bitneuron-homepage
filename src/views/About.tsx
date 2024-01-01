import { ExternalLink } from "components";
import { WHITE_PAPER } from "config/constants/constant";

const About = () => (
  <div className="pt-24 max-w-5xl m-auto px-4 sm:px-0 text-slate-300">
    <h1
      id="title"
      className="text-[24px] font-bold sm:text-4xl leading-tight text-white text-center"
    >
      Democratize AI Onchain
    </h1>
    <p className="text-[12px] sm:text-2xl my-4 text-slate-400 text-center">
      BitNeuron - A Publicly Accessible Artificial Intelligence & Open Internet Infrastructure
    </p>
    <img
      className=" max-w-screen-md mx-auto my-10 opacity-90"
      src={"/images/decentralized-ai.png"}
      alt="decentralize AI onchain"
    ></img>
    <h1 className="text-[18px] font-bold sm:text-3xl leading-tight text-slate-50">Story</h1>
    <p className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      We have roots in Meta & Uber where our founders have worked there on large-scale AI systems
      for user growth, fraud detection and ads ranking. With BitNeuron, we apply our expertise in
      large-scale AI infrastructure, system engineering and AI applications to significantly expand
      the capacity of decentralized networks with AI.
    </p>
    <h1 className="text-[18px] font-bold sm:text-3xl leading-tight text-slate-50 mt-10">Vision</h1>
    <div className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      <p>BitNeuron Network is to:</p>
      <ul className="list-disc">
        <li className="sm:ml-10">
          <b className="font-normal text-slate-50">democratize AI</b> for contributions from and
          rewards to the mass public
        </li>
        <li className="sm:ml-10">
          <b className="font-normal text-slate-50">bring AI on-chain</b> for the public access and
          privacy, and
        </li>
        <li className="sm:ml-10">
          <b className="font-normal text-slate-50">fully decentralize</b> the data collection, model
          learning and application integrations
        </li>
      </ul>
    </div>
    <h1 className="text-[18px] font-bold sm:text-3xl leading-tight text-slate-50 mt-10">Mission</h1>
    <p className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      BitNeuron is to provide censorship resistance, public access and ownership for the AI
      development. It is a hardware coordination layer for compute resources and data intelligence
      layer for AI development coordination.
    </p>
    <p className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      It is a decentralized Web3 data intelligence infrastructure in which users can plug in their
      local data together with public onchain and offchain data. More enriched decentralized
      applications and secure multichain Web3 ecosystem can be built on top of it. User behaviors,
      wallet profiles and protocol forensics are learned and propagated in the network in a privacy
      preserving manner to empower data driven DApps and build digital asset security and risk
      management.{" "}
    </p>
    <p className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      It builds the fundamental Web3 data intelligence layer for on-chain security, digital asset
      management, next generation social networking, targeted user growth, decentralized Web3
      content distribution, identity, reputation, personalized recommendation and fully
      decentralized data ownership. Data ownership is given back to users, while data analytics and
      intelligence capacities are maintained by BitNeuron Network in a fully decentralized manner. The
      learned behaviors are accessible through smart contracts in BitNeuron network or any other
      blockchain in privacy preserving manner.{" "}
    </p>
    <p className="text-[12px] font-light sm:text-xl mt-2 mb-4">
      BitNeuron northstar is a{" "}
      <i className="font-normal text-slate-50">
        decentralized AI infrastructure for everyone to build, connect and earn.
      </i>{" "}
      The technical details are illustrated in the{" "}
      <ExternalLink to={WHITE_PAPER}>
        <span className="text-green font-bold">whitepaper</span>
      </ExternalLink>
      .
    </p>
  </div>
);
export default About;
