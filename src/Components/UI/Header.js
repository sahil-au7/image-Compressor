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
        <a href="https://www.linkedin.com/in/sahil-y-356416b9/">
          <LinkedInIcon className="header__linkLogo hvr-grow" />
        </a>
        <a href="https://github.com/sahil-au7/image-Compressor">
          <GitHubIcon className="header__linkLogo hvr-grow" />
        </a>
      </div>
    </div>
  );
};

export default Header;
