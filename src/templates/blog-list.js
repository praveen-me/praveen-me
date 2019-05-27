import React from 'react';

import LayoutWrapper from '../components/layoutWrapper';
import Pagination from '../components/pagination';
import PostList from '../components/PostList';

const BlogList = ( { data } ) => {
  
  return(
    <LayoutWrapper>
      <PostList posts={ data.allMarkdownRemark }/>
      <Pagination />
    </LayoutWrapper>
  )
};

export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: ASC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        fields {
          slug
        }
        html
        wordCount {
          words
        }
        excerpt(pruneLength: 150)
        frontmatter{
          title
          date
        }
      }
    }
  }
}
`;

export default BlogList;