import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const HeroSection = ( ) => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  );
  
  return(
    <div className="main__sec">
      <h3 className="main__author-subhead center">Hi there! I'm</h3>
      <h1 className="main__author-head center">{ site.siteMetadata.title }</h1>
      <p className="main__author-experct">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.
      <br/><Link to="/about" className="main__content-link">read more...</Link></p>
    </div>
  )
};

export default HeroSection;