/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ( { node, getNode, actions } ) => {
  if ( node.internal.type === 'MarkdownRemark' ) {
    const { createNodeField } = actions;
    const slug =  createFilePath( { node, getNode, basePath: `pages` } )
    createNodeField({
      node, 
      name: `slug`,
      value: slug 
    })
  }
}

exports.createPages = ( { graphql, actions } ) => {
  const { createPage } = actions;
  
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        const { slug } = node.fields; 
        console.log(slug)
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug
          }
        })
      } )
    });
}