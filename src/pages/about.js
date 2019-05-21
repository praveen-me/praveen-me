import React from "react"
import { Link } from "gatsby"
import { graphql} from 'gatsby';

import SEO from "../components/seo";
import LayoutWrapper from "../components/layoutWrapper";

const About = ( { data } ) => {
  
  const about = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title === 'About');

  console.log(about)
  
  const minutes = Math.ceil( about[0].node.wordCount.words / 200 ) 

  return (
    <LayoutWrapper>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]}/>

      {/* About Page */}
      <div className="about sml-wrapper">
        <div className="about__sec">
          <div className="about__head-sec">
            <h2 className="about__head">
              About Me
            </h2>
            <p className="about__time"> { minutes } { minutes > 1 ? 'minutes' : 'minute'  }  read </p>
          </div>
          <img src={ data.imageOne.childImageSharp.fluid.src } alt="Praveen Kumar Saini" className="about__author-img"/>
        </div>
        <p className="about__content content" dangerouslySetInnerHTML={
          {
            __html: about[0].node.html
          }
        }>
        </p>
      </div> 
    </LayoutWrapper>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid {
          src
          originalImg
          originalName
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          wordCount {
            words
          }
          frontmatter{
            title
          }
        }
      }
    }
  }
`

export default About;
