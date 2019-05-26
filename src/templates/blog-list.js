import React from 'react';
import { Link, graphql } from 'gatsby';
import LayoutWrapper from '../components/layoutWrapper';
import Pagination from '../components/pagination';
import PostBlock from '../components/home/PostBlock';

const BlogList = ( { data } ) => {
  const posts = data.allMarkdownRemark.edges;
  
  return(
    <LayoutWrapper>
      {
        posts.map(({ node }) => {
          const { fields, wordCount, excerpt, frontmatter } = node;
          return <PostBlock 
          slug={ fields.slug } 
          date={ frontmatter.date }
          words={ wordCount.words }
          title={ frontmatter.title }
          excerpt={ excerpt }
          key={ fields.slug }
          />
        } )
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
          html
          wordCount {
            words
          }
          excerpt(pruneLength: 75)
          frontmatter{
            title
            date
          }
        }
      }
    }
     
  }
`

export default BlogList;