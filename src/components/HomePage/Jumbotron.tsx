import { useEffect, useLayoutEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { BtnWebApp, ExternalLink } from "components";
import { APP_LINK } from "config/constants/constant";

export const Jumbotron = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["Own Your Data.", "Monetize Your Traffic.", "Build Your DApps."],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div
      className="relative pt-16 sm:pt-24 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${
          isMobile ? "bg-planets-1-m" : "bg-planets-1"
        }.jpg)`,
      }}
    >
      <div className="relative headline px-8 pt-32 sm:pt-60 pb-24 sm:pb-96">
        <h1 id="typewriter" className="font-bold text-[56px] sm:text-8xl mb-2 sm:mb-8 uppercase">
          CONNECT,
        </h1>
        <h2 className="text-lg leading-normal sm:text-4xl">
          A Decentralized, Privacy Preserving & Open AI Network{" "}
        </h2>
        <div className="mt-36 sm:hidden">
          <ExternalLink to={APP_LINK}>
            <BtnWebApp className="text-sm !px-16" />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
