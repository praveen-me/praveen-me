
import React from 'react';
import { graphql } from 'gatsby';
import {  Location } from '@reach/router';

import LayoutWrapper from '../components/layoutWrapper';
import Metatags from '../components/MetaTags';
import { minutes } from '../utils/helper-functions';
import SharePostSection from '../components/SharePostSections';

export default ( { data } ) => {
  const post = data.markdownRemark;
  const { siteUrl, author } = data.site.siteMetadata;

  const time = minutes(post.wordCount.words);
  
  return (
    <LayoutWrapper>
      <Location>
      {
        ( locationProps ) => (
          <Metatags
          url={ siteUrl }
          title= { post.frontmatter.title }
          pathname={ locationProps.location.pathname }
          description={ post.excerpt }
          />
        )
      }
      </Location>

      <div className="content post">
        <h2 className="post__title center"> { post.frontmatter.title }</h2>
        <p className="post__info"> 
          <span className="post__date">{ new Date(post.frontmatter.date).toDateString() }</span>  — 
          <span className="post__time">{ time } { time > 1 ? 'minutes' : 'minute' } read</span> 
        </p>
        <div dangerouslySetInnerHTML={ { __html: post.html } } />
        <SharePostSection socialdata={{
          url: `${siteUrl}${post.fields.slug}`,
          title: `${post.frontmatter.title} \n ${post.excerpt}`,
          via: author
        }}/>
      </div>
    </LayoutWrapper>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } } ) {
      html
      excerpt
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
    site {
      siteMetadata {
          siteUrl
          author
        }
    }
  }
`