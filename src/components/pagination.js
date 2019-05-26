import React from 'react';
import { Link, useStaticQuery } from 'gatsby';

const Pagination = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark{
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
  );

  const totalPages = Math.ceil( allMarkdownRemark.edges.length / 5 );
  
  let pages = [];

  for ( let i = 1; i <= totalPages; i++ ) {
    pages.push(i);
  }

  return (
    <div className="pagination">
    {
      pages.map((page, i) => (
        <Link href={ page === 1 ? '/' : `/page/${ i + 1 }` } className="page">{ i + 1 }</Link>
      ) )
    }
    </div>
  )
  
};



export default Pagination;