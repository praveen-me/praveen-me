import React from 'react';
import { TwitterShareButton } from 'react-share';

const SharePostSection = ({ socialdata }) => {
  const { url, title, via } = socialdata;
  
  return (
    <>
      <TwitterShareButton 
      className="social-share__icon" 
      url={url} 
      title={ title }
      via={via}>
        <span className="social-share__container">
          <i className="fab fa-twitter"></i>
        </span>
      </TwitterShareButton>
    </>
  )
};

export default SharePostSection;