import React from 'react';
import { Link }  from 'gatsby';
import { minutes } from '../../utils/helper-functions';


const PostBlock = ( { slug, date, words, title, excerpt, large } ) => {
  let time = minutes(words);

  return(
    <Link to={ slug } className={`posts__single ${ large ? 'large': '' }`}>
      <p className="posts__date-and-time">{ new Date(date).toDateString() } - { time } { time > 1 ? 'mins' : 'min' } read</p>
      <h2 className="posts__title">{ title }</h2>
      <p className="posts__excerpt">{ excerpt }</p>
    </Link>
  )
};

export default PostBlock;