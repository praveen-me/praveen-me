import React from 'react';
import { Link, graphql } from 'gatsby';
import LayoutWrapper from '../components/layoutWrapper';
import Pagination from '../components/pagination';

const BlogList = ( { data } ) => {
  const posts = data.allMarkdownRemark.edges;
  
  return(
    <LayoutWrapper>
      {
        posts.map(({node}) => <h2>{node.frontmatter.title}</h2> )
      } 
      <Pagination />
    </LayoutWrapper>
  )
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
     
  }
`

export default BlogList;