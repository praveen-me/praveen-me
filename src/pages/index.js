import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Adding Styles
import './../scss/app.scss'
import LayoutWrapper from "../components/layoutWrapper";
import HeroSection from "../components/home/HeroSection";
import PostBlock from "../components/home/PostBlock";

const IndexPage = ({ data }) => {

  const allPosts = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title !== 'About');

  return (
    <LayoutWrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]} />
      <div className="main__content">
        {/* Hero Section */}
        <HeroSection />

        {/* Post List Section */}
        <div className="posts">
          {
            allPosts.map( post => {

              const { fields, wordCount, excerpt, frontmatter } = post.node;
              
              return  <PostBlock 
              slug={ fields.slug } 
              date={ frontmatter.date }
              words={ wordCount.words }
              title={ frontmatter.title }
              excerpt={ excerpt }
              key={ fields.slug }
              />
            } )
          }
        </div>
      </div>
    </LayoutWrapper>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(
    sort : { order: DESC, fields: [frontmatter___date] },
    limit: 5
    ) {
    edges {
      node {
        fields {
          slug
        }
        html
        wordCount {
          words
        }
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

export default IndexPage
