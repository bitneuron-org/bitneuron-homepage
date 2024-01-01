import { ExternalLink, SocialItem } from "components";
import { ReactComponent as IconTwitter } from "icons/icon-twitter.svg";
import { ReactComponent as IconDiscord } from "icons/icon-discord.svg";
import { ReactComponent as IconTelegram } from "icons/icon-telegram.svg";
import { ReactComponent as IconGithub } from "icons/icon-github.svg";
import { DISCORD_LINK, GITHUB_LINK, TELEGRAM_LINK, TWITTER_LINK } from "config/constants/constant";

const Footer = () => {
  return (
    <footer className="relative w-screen sm:h-24 py-8 sm:py-0">
      <div
        className="absolute -z-50 w-full max-w-[1440px] h-full sm:h-[500%] bottom-0 left-0 bg-cover bg-[right_40%_top] sm:bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-planets-5.jpg)`,
        }}
      ></div>
      <nav className="relative flex flex-col sm:flex-row justify-between items-center w-full h-full p-4">
        <div className="mb-12 sm:mb-0">
          <img
            src={process.env.PUBLIC_URL + "/images/bitneuron-logo.svg"}
            width={224}
            height={80}
            alt="BitNeuron"
          />
        </div>
        <ul className="flex items-center space-x-2 sm:space-x-4">
          <SocialItem>
            <ExternalLink to={TWITTER_LINK}>
              <IconTwitter className="w-[75%] sm:w-auto" />
            </ExternalLink>
          </SocialItem>
          <SocialItem>
            <ExternalLink to={TELEGRAM_LINK}>
              <IconTelegram className="w-[75%] sm:w-auto" />
            </ExternalLink>
          </SocialItem>
          <SocialItem>
            <ExternalLink to={DISCORD_LINK}>
              <IconDiscord className="w-[75%] sm:w-auto" />
            </ExternalLink>
          </SocialItem>
          <SocialItem>
            <ExternalLink to={GITHUB_LINK}>
              <IconGithub className="w-[75%] sm:w-auto" />
            </ExternalLink>
          </SocialItem>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
