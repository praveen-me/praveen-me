import React from "react";
import { graphql} from 'gatsby';

import SEO from "../components/seo";
import LayoutWrapper from "../components/layoutWrapper";

const About = ( { data } ) => {

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
            <p className="about__time"> 2 minutes read </p>
          </div>
          <img src={ data.imageOne.childImageSharp.fluid.src } alt="Praveen Kumar Saini" className="about__author-img"/>
        </div>
        <p className="about__content content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam.</p> 
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
  }
`

export default About;
