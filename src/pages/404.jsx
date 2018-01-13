import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="container contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>404</h1>
      </div>
    );
  }
}

export default ContactPage;
