import { Link } from "gatsby";
import React from "react";

import socialLinks from "../utils/social-links";

const Header = () => (
  <header className="header" id="top">
    <a href="#top" className="header__topbar" />
    <div className="header__content-block">
      <div className="header__logo-sec">
        <Link to="/" className="header__logo">JS</Link>
      </div>
      <div className="header__social-pack">
        {
          socialLinks.map( ( link, i ) => (
            <div className="header__social-sec" key={ link.linkType }>
              <span> { link.linkType } </span> 
              <a href={link.socialLink + link.username } rel="noopener noreferrer" target="_blank"> @{ link.username }</a>
            </div>
          ) )
        }        
      </div>
    </div>
  </header>
);

export default Header
