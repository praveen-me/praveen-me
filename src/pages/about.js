import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

// const data = useStaticQuery(
//   graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `
// )

class About extends Component  {

  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: ! this.state.isOpen
    })
  }

  render() {
    const {isOpen } = this.state;
    
    return <Layout>
      <SEO title="Page two" />
      {/* <p>{ data.site.siteMetadata.title }</p>  */}
      <p>Welcome to my about page.</p>
      
      {
        isOpen ? 'Open' : "Close"
      }

      <button onClick={ this.handleClick }>Toogle</button>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  }
}

export default About;
