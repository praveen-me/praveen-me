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
    });
  }
}

exports.createPages = ( { graphql, actions } ) => {
  const { createPage } = actions;
  
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              title
            }
          }
        }
      }
    }
  `)
    .then(results => {
      const allPosts = results.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title !== 'About'); 
      const postsPerPage = 5;  
      const numPages = Math.ceil( allPosts.length / postsPerPage );

      for ( const post of allPosts ) {
        console.log( post.node.frontmatter.title );
      }

      Array.from({ length: numPages }).forEach((_, i) => {        createPage({
          path: i === 0 ? '/page' : `/page/${ i + 1 }`,
          component: path.resolve('./src/templates/blog-list.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i
          }
        })
      })

      // Making a seperate page for a particular blog
      results.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        const { slug } = node.fields; 
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