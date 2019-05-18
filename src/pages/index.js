import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Adding Styles
import './../scss/app.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]} />
    <div>
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
