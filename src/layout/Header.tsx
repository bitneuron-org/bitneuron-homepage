import { BtnWebApp, ExternalLink, NavItem } from "components";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import {
  ABOUT_LINK,
  APP_LINK,
  BLOG_LINK,
  ECOSYSTEM_LINK,
  ROADMAP_LINK,
  TEAM_LINK,
  TERM_LINK,
  WHITE_PAPER,
  MEDIA_LINK,
} from "config/constants/constant";
import { Link } from "react-router-dom";
import { Menu } from "@mui/material";
import styled from "@emotion/styled";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    background: "transparent",
    boxShadow: "none",
    color: "inherit",
    font: "inherit",
    "& .MuiMenu-list": {
      padding: 0,
      color: "inherit",
      font: "inherit",
      background: "transparent",
    },
  },
});

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [expendMenu, setExpendMenu] = useState<string | null>(null);
  const resourcesBtnRef = useRef(null);

  const handleClose = () => {
    setExpendMenu(null);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <header className={cn(["fixed top-0 z-50 w-screen h-16 sm:h-24", navbarBg && "bg-black/60"])}>
      <nav className="relative flex justify-between items-center h-full sm:p-4">
        <Link to={"/"} className="mr-4">
          <img src={"/images/bitneuron-logo.svg"} width={224} height={80} alt="BitNeuron" />
        </Link>
        <div className="flex items-center justify-between space-x-2 sm:space-x-10">
          <NavItem>
            <Link to={ABOUT_LINK}>About</Link>
          </NavItem>
          <NavItem>
            <Link to={TEAM_LINK}>Team</Link>
          </NavItem>
          <NavItem>
            <Link to={ECOSYSTEM_LINK}>Ecosystem</Link>
          </NavItem>
          <NavItem>
            <div ref={resourcesBtnRef}>
              <div
                onClick={() => {
                  setExpendMenu("Resources");
                }}
                className="flex items-center"
              >
                <div className="cursor-pointer">Resources</div>
                {expendMenu === "Resources" ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
              {expendMenu && (
                <StyledMenu
                  open={expendMenu === "Resources"}
                  onClose={handleClose}
                  anchorEl={resourcesBtnRef.current}
                >
                  <div className="flex flex-col shadow-xl bg-gray-dark rounded-md h-full py-1">
                    <div className="py-2 px-4 hover:bg-gray-medium">
                      <NavItem>
                        <ExternalLink to={WHITE_PAPER}>Whitepaper</ExternalLink>
                      </NavItem>
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-medium">
                      <NavItem>
                        <ExternalLink to={BLOG_LINK}>Documentation</ExternalLink>
                      </NavItem>
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-medium">
                      <NavItem>
                        <Link to={ROADMAP_LINK}>Roadmap</Link>
                      </NavItem>
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-medium">
                      <NavItem>
                        <Link to={TERM_LINK}>Terms</Link>
                      </NavItem>
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-medium">
                      <NavItem>
                        <Link to={MEDIA_LINK}>Media</Link>
                      </NavItem>
                    </div>
                  </div>
                </StyledMenu>
              )}
            </div>
          </NavItem>
          <NavItem className="hidden sm:block">
            <ExternalLink to={APP_LINK}>
              <BtnWebApp />
            </ExternalLink>
          </NavItem>
        </div>
      </nav>
    </header>
  );
};

export default Header;
