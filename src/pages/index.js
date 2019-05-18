import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Adding Styles
import './../scss/app.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]} />
    <div className="main__content">
      {/* Hero Section */}
      <div className="main__sec">
        <h3 className="main__author-subhead center">Hi there! I'm</h3>
        <h1 className="main__author-head center">Praveen Kumar Saini</h1>
        <p className="main__author-experct">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam. <Link to="#" className="main__content-link">read more...</Link></p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
        
      }
    }
  }
}
`

export default IndexPage
