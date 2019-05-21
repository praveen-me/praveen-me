import React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layoutWrapper';

export default ( { data } ) => {
  const post = data.markdownRemark;
  return (
    <LayoutWrapper>
      <div className="content post">
      <h1 className="post__title center"> { post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={ { __html: post.html } } />
      </div>

    </LayoutWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } } ) {
      html,
      frontmatter {
        title
      }
    }
  }
`