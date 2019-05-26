/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

// import './../scss/app.scss';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false
    }
  }
  
  componentDidMount() {
    this.setState({
      isHome: this.props.location.pathname === '/' || this.props.location.pathname.match(/page/, 'i') ? true : false
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
