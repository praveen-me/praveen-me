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
      I am a life long learner and currently working as a React Developer at <a href="https://rtcamp.com">rtCamp</a> . Most of the time I totally evolved in JavaScript stuff like React, Redux, Node, Express, etc.
      <br/><Link to="/about" className="main__content-link">read more...</Link></p>
    </div>
  )
};

export default HeroSection;