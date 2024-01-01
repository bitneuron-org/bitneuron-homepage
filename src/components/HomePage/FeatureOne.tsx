const FeatureOne = () => {
  return (
    <div
      className="relative bg-contain bg-left bg-no-repeat"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-planets-2.jpg)`,
      }}
    >
      <div className="container m-auto px-4 sm:px-16 lg:px-32 pt-24 sm:py-32 lg:py-48">
        <h1 className="text-[32px] font-bold sm:text-5xl leading-tight">Ecosystem Use Cases</h1>
        <h2 className="text-[16px] sm:text-2xl leading-tight mx-4 my-4 sm:m-0">
          Decentralized Social Network for Every Web2 & Web3 User.
        </h2>
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/feature-socialize.png"}
            alt="Socialize with your friends, engage with their NFT activities, and grow your Web3 Network"
            className="sm:max-w-[60%]"
          />
          <h3 className="text-base sm:text-[28px] leading-normal sm:leading-tight mx-4 mt-10 mb-4 sm:m-0">
            Socialize with your friends, engage with their NFT activities, and grow your Web3
            Network
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <h3 className="text-base sm:text-[28px] leading-normal sm:leading-tight mx-4 mt-4 sm:m-0">
            Seamlessly discover NFTs, projects, and Web3 trends to your taste
          </h3>
          <img
            src={process.env.PUBLIC_URL + "/images/feature-discover.png"}
            alt="Seamlessly discover NFTs, projects, and Web3 trends to your taste"
            className="sm:max-w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
