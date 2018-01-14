import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "../..components/Contact/Contact";
import config from "../../..data/SiteConfig";
import { withPrefix } from 'gatsby-link'

class PortfolioPage extends Component {
  render() {
    return (
      <div className="container contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h2>Portfolio</h2>
        <div>
        
        </div>
        
      </div>
    );
  }
}

export default PortfolioPage;
