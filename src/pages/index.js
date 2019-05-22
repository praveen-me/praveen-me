import React from "react"
import { Link, graphql } from "gatsby";
import SEO from "../components/seo"

// Adding Styles
import './../scss/app.scss'
import LayoutWrapper from "../components/layoutWrapper";

const IndexPage = ({ data }) => {
  const about = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title === 'About');

  const allPosts = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title !== 'About');

  const minutes = (words) => Math.ceil( words / 200 );

  return (
    <LayoutWrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]} />
      <div className="main__content">
        {/* Hero Section */}
        <div className="main__sec">
          <h3 className="main__author-subhead center">Hi there! I'm</h3>
          <h1 className="main__author-head center">{ data.site.siteMetadata.title }</h1>
          <p className="main__author-experct">{ about[0].node.excerpt }
          <br/><Link to="/about" className="main__content-link">read more...</Link></p>
        </div>

        {/* Post List Section */}
        <div className="posts">
          {
            allPosts.map( post => (
              <Link to={ post.node.fields.slug } className="posts__single" key={ post.node.fields.slug }>
                { console.log() }
                <p className="posts__date-and-time">{ new Date(post.node.frontmatter.date).toDateString() } - { minutes(post.node.wordCount.words) } { minutes(post.node.wordCount.words) > 1 ? 'mins' : 'min' } read</p>
                <h2 className="posts__title">{ post.node.frontmatter.title }</h2>
                <p className="posts__excerpt">{ post.node.excerpt }</p>
              </Link>
            ) )
          }
        </div>
      </div>
    </LayoutWrapper>
  )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
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
