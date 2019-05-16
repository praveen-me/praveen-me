import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import socialLinks from "../utils/social-links";

const Header = ({ siteTitle }) => (
  <header className="header" id="top">
    <a href="#top" className="header__topbar"></a>
    <div className="header__content-block">
      <div className="header__logo-sec">
        <Link to="/" className="header__logo">JS</Link>
      </div>
      <div className="header__social-pack">
        {
          socialLinks.map( ( link, i ) => (
            <div className="header__social-sec" key={ link.linkType }>
              <span> { link.linkType } </span> 
              <a href={link.socialLink + link.username }> @{ link.username }</a>
            </div>
          ) )
        }        
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
