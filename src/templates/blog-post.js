import React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layoutWrapper';

export default ( { data } ) => {
  const post = data.markdownRemark;
  return (
    <LayoutWrapper>
      <div className="content post">
      <h2 className="post__title center"> { post.frontmatter.title }</h2>
      <p className="post__info">  </p>
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