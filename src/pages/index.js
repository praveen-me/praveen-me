import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Adding Styles
import './../scss/app.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>All Files</p>
      {
        data.allMarkdownRemark.edges.map( ({ node }) => (
          <Link key={ node.id } to={ node.fields.slug }>
            <p dangerouslySetInnerHTML={ { __html: node.html } }></p>
            <p>Title => { node.frontmatter.title }</p>
            <p>Date => { new Date( node.frontmatter.date ).toDateString() } </p>
          </Link>
        ) )
        // console.log(data)
      }
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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
