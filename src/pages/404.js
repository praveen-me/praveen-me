import React from "react";
import SEO from "../components/seo";
import LayoutWrapper from './../components/layoutWrapper';

const NotFoundPage = () => (
  <LayoutWrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutWrapper>
)

export default NotFoundPage;