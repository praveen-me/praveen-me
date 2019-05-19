/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false
    }
  }
  
  // const [isHome, setIsHome] = useState(true);
  
  componentDidMount() {
    this.setState({
      isHome: this.props.location.pathname === '/' ? true : false
    })  
  }
  

  render() {
    const { children} = this.props;
    const { isHome } = this.state;
    return (
      <div className={ isHome ? 'home' : 'show-content' }>
        <Header/>
        <main className="wrapper main">{children}</main>
        <Footer/>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
