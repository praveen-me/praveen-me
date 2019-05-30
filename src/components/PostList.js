import React from 'react';
import PostBlock from './home/PostBlock';

const PostList = ({ posts }) => {
  const firstPost = posts.edges[0].node;
  const leftPosts = posts.edges.slice(1);

  return (
    <div class="posts__wrapper">
      <PostBlock 
      slug={ firstPost.fields.slug } 
      date={ firstPost.frontmatter.date }
      words={ firstPost.wordCount.words }
      title={ firstPost.frontmatter.title }
      excerpt={ firstPost.excerpt }
      key={ firstPost.fields.slug }
      large
      />
      <div className="posts">
        {
          leftPosts.map( post => {

            const { fields, wordCount, excerpt, frontmatter } = post.node;
            
            return  <PostBlock 
            slug={ fields.slug } 
            date={ frontmatter.date }
            words={ wordCount.words }
            title={ frontmatter.title }
            excerpt={ excerpt }
            key={ fields.slug }
            />
          } )
        }
      </div>
    </div>
  )
};

export default PostList;