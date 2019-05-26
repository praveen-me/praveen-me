import { graphql } from 'gatsby';

const queryFetchPost = graphql`
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

