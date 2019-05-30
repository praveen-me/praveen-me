import React from 'react';
import { graphql } from 'gatsby';
import {  Location } from '@reach/router';

import LayoutWrapper from '../components/layoutWrapper';
// import SEO from '../components/seo';
import Metatags from '../components/MetaTags';
import { minutes } from '../utils/helper-functions';

export default ( { data } ) => {
  const post = data.markdownRemark;
  const url = data.site.siteMetadata.siteUrl

  const time = minutes(post.wordCount.words);
  
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
        <p className="post__info"> <span className="post__date">{ new Date(post.frontmatter.date).toDateString() }</span> - <span className="post__time">{ time } { time > 1 ? 'minutes' : 'minute' } read</span> </p>
        <div dangerouslySetInnerHTML={ { __html: post.html } } />
      </div>
    </LayoutWrapper>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } } ) {
      html
      excerpt
      wordCount {
        words
      }
      frontmatter {
        title
        date
      }
    }
    site {
      siteMetadata {
          siteUrl
        }
    }
  }
`