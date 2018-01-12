import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h2>Portfolio</h2>
      </div>
    );
  }
}

export default PortfolioPage;
