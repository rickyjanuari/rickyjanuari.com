import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      	<div className="container">
        <div class="footer-credits">© 2016 - 2018 <a href="https://rickyjanuari.com/">Ricky Januari</a></div>
      	</div>
      </footer>
    );
  }
}

export default Footer;
