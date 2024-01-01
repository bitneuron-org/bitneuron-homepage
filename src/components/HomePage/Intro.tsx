const Intro = () => {
  return (
    <>
      <div className="relative">
        <div className="relative container overflow-hidden pl-4 pr-20 sm:px-24 py-6 sm:py-10 mb-6 bg-gradient-effect-1">
          <h3 className="w-64 sm:w-auto max-w-5xl text-base sm:text-[28px] leading-tight float-right">
            <span className="font-bold text-lg sm:text-4xl">BitNeuron</span> is an integrated Web3
            native AI network equipped with a decentralized and privacy preserving data
            infrastructure.
          </h3>
          <div className="triangle-bottom-right absolute -top-8 sm:top-0 right-0"></div>
        </div>
        <div className="relative container overflow-hidden float-right bg-gradient-effect-2">
          <div className="relative w-full bg-black overflow-hidden pl-24 pr-4 sm:pl-48 sm:pr-12 lg:pr-48 py-6 sm:py-10 my-1">
            <h3 className="w-64 sm:w-auto max-w-5xl text-base sm:text-[28px] leading-tight">
              We aim to revolutionize the way Web3 information is distributed, discovered, and
              consumed by users, projects, and creators.
            </h3>
            <div className="absolute bg-[#bdd11f] w-1 h-[120%] left-[52px] sm:left-[90px] lg:left-[101px] xl:left-[111px] -top-3 sm:-top-4 rotate-[26.6deg]"></div>
          </div>
          <div className="triangle-top-left absolute top-0 -left-16 sm:left-0"></div>
        </div>
      </div>
      <div className="clear-both"></div>
    </>
  );
};

export default Intro;
