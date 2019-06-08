import React from "react";
import SEO from "../components/seo";
import LayoutWrapper from './../components/layoutWrapper';

const NotFoundPage = () => (
  <LayoutWrapper>
    <SEO title="404" />
    <div className="not-found">
    </div>
  </LayoutWrapper>
)

export default NotFoundPage;