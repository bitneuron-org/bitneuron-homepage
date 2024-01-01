const FeatureTwo = () => {
  return (
    <div
      className="relative bg-contain bg-no-repeat bg-bottom pb-32 sm:pb-60 lg:pb-72"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-planets-3.jpg)`,
      }}
    >
      <div
        className="absolute right-0 -bottom-1/2 sm:-bottom-1/3 w-1/2 sm:w-1/3 max-w-lg bg-contain h-full bg-right bg-no-repeat mix-blend-lighten opacity-80"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-planets-4.jpg)`,
        }}
      ></div>
      <div className="container m-auto px-4 sm:px-16 lg:px-32">
        <div className="relative">
          <h2 className=" w-full xl:w-2/5 font-bold text-[32px] sm:text-[40px] leading-tight xl:absolute xl:top-0 xl:right-20 xl:mt-16">
            Chain Agnostic Identity Systems for Social Trusts & Web3 Reputation
          </h2>
          <img
            src={process.env.PUBLIC_URL + "/images/features-automation-analytics.png"}
            alt="User Targeted Campaign Automation Tools. User Bahaviour Analytics APIs & SDKs"
            className="hidden sm:block xl:max-w-[80%]"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/features-automation-analytics-m.png"}
            alt="User Targeted Campaign Automation Tools. User Bahaviour Analytics APIs & SDKs"
            className="-mt-20 -mb-20 sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
