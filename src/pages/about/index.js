import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../../components/About/About";
import config from "../../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>Ini adalah about indonesia</h1>
      </div>
    );
  }
}

export default AboutPage;
