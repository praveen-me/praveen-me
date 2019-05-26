import React from 'react';
import {  Location } from '@reach/router';
import Layout from './layout';

const LayoutWrapper = ( props ) => {
  return <Location>
    {
      (locationProps) => 
       <Layout {...locationProps} { ...props }>{ props.children }</Layout>
    }
  </Location>
}

export default LayoutWrapper;