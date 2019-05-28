import React from 'react';
import { graphql } from 'gatsby';
import {  Location } from '@reach/router';

import LayoutWrapper from '../components/layoutWrapper';
// import SEO from '../components/seo';
import Metatags from '../components/MetaTags';

export default ( { data } ) => {
  const post = data.markdownRemark;
  console.log(post)
  const url = data.site.siteMetadata.siteUrl

  return (
    <LayoutWrapper>
      {/* <SEO title={ post.frontmatter.title }> */}
        <Location>
          {
            ( locationProps ) => (
              <Metatags
              url={ url }
              title= { post.frontmatter.title }
              pathname={ locationProps.location.pathname }
              description={ post.excerpt }
              />
            )
          }
        </Location>
        <div className="content post">
        <h2 className="post__title center"> { post.frontmatter.title }</h2>
        <p className="post__info">  </p>
        <div dangerouslySetInnerHTML={ { __html: post.html } } />
        </div>
      {/* </SEO> */}
    </LayoutWrapper>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } } ) {
      html
      excerpt
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
          siteUrl
        }
    }
  }
`