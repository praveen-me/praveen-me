import React, { useState, useEffect } from 'react';
import { TwitterShareButton } from 'react-share';

const SharePostSection = ({ socialdata }) => {
  const { url, title, via } = socialdata;
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' && window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(typeof window !== 'undefined' && window.innerWidth);
  }

  useEffect(() => {

    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    };
  }, [ windowWidth ]);

  

  return (
    <div className="share_button-wrapper">
    <TwitterShareButton 
    className="social-share__icon" 
    url={url} 
    title={ title }
    via={via}>
      <span className="social-share__container">
        <i className="fab fa-twitter" />
      </span>
    </TwitterShareButton>
    {
      windowWidth <= 959 && <p className="share_button-text">Share It On Twitter</p>
    }
    </div>
  )
};

export default SharePostSection;