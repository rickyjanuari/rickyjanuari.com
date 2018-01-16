import React from "react";
import Helmet from "react-helmet";
import Intro from "../components/Intro/Intro";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div className="home index-container">
        <Helmet title={config.siteTitle} />
        <Intro />
        <div className="content-container">
        </div>
        
      </div>
    );
  }
}

export default Index;

