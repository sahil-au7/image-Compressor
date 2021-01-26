import React from "react";
import "./Header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

const Header = () => {
  return (
    <div className="header">
      <div className="header__info">
        <BrokenImageIcon className="header__logo" />
        <h1>Image Compressor</h1>
      </div>
      <div className="header__links">
        <a href="">
          <LinkedInIcon className="header__linkLogo" />
        </a>
        <a href="">
          <GitHubIcon className="header__linkLogo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
