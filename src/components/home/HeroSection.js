import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const HeroSection = ( ) => {
  
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 75)
            frontmatter{
              title
              date
            }
          }
        }
      }
    }
    `
  );

  const about = allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title === 'About');
  
  return(
    <div className="main__sec">
      <h3 className="main__author-subhead center">Hi there! I'm</h3>
      <h1 className="main__author-head center">{ site.siteMetadata.title }</h1>
      <p className="main__author-experct">{ about[0].node.excerpt }
      <br/><Link to="/about" className="main__content-link">read more...</Link></p>
    </div>
  )
};

export default HeroSection;