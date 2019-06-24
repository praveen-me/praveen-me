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
          <p>I am a life long learner and currently working as a React Developer at <a href="https://rtcamp.com">rtCamp</a> . Most of the time I am totally involved in JavaScript stuff like React, Redux, Node, Express, MongoDB etc.</p> 

          <p>As we know the web is continuously changing so I always try to be updated and always be evolved around the new technologies and always have my keen eye on them for making something good out of them.</p> 

          <p>I am a college dropout, Google Udacity Scholar and got a Front End Nanodegree. I also did a Full Stack Development Program from <a href="https://altcampus.io">AltCampus</a> and always grateful of their program that helps me to be quality developer.</p> 

          <p>In this blog, I like to write about JavaScript stuff i.e what I explored and find interesting to write about.</p> 
          <p>In my free time, i.e when I am not coding I like to sleep <span aria-label="Grin Image" role="img" alt="image of grin">😬</span>, read philosophies, watch documentaries and Netflix.</p> 
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
