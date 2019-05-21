import React from 'react';
import {  Location } from '@reach/router';
import Layout from './layout';


const LayoutWrapper = ( props ) => {
  return <Location>
    {
      (locationProps) => {
        console.log(locationProps);
        return <Layout {...locationProps} { ...props }>{ props.children }</Layout>
      }
    }
  </Location>
}

export default LayoutWrapper;