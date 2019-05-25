import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";

// Adding Styles
import './../scss/app.scss'
import LayoutWrapper from "../components/layoutWrapper";
import { minutes } from "../utils/helper-functions";
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
              let time = minutes(post.node.wordCount.words);
              return <>

                <PostBlock 
                slug={ post.node.fields.slug } 
                date={ post.node.frontmatter.date }
                words={ post.node.wordCount.words }
                title={ post.node.frontmatter.title }
                exceprt={ post.node.excerpt }/>

              </>;
            } )
          }
        </div>
      </div>
    </LayoutWrapper>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
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
