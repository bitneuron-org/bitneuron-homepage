const FeatureThree = () => {
  return (
    <div className="relative">
      <div className="container m-auto px-4 sm:px-16 lg:px-48 pt-8 sm:pt-16 pb-16 sm:pb-60">
        <h2 className="font-bold text-[32px] sm:text-5xl leading-tight">
          BitNeuron Data Aggregation & Learning Infrastructure Unlocks the Future of Blockchains{" "}
        </h2>
        <h3 className="text-base text-[28px] leading-normal mx-4 my-8 sm:m-0">
          Our AI powered user behavior analytics and privacy preserving data protocols enable
          decentralized model learning capabilities while safeguarding users&apos; data ownership
        </h3>
        <img
          src={process.env.PUBLIC_URL + "/images/feature-aggregation-learning.png"}
          alt="Aggregation & Learning"
          className="m-auto"
        />
      </div>
    </div>
  );
};

export default FeatureThree;
