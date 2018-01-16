import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "components/Contact/Contact";
import config from "../../../data/SiteConfig";
import "./styles.scss";
class WorkIndex extends Component {
  render() {
    return (
        <div className="container contact-container">
            <Helmet title={`Work | ${config.siteTitle}`} />
            <h2>Work</h2>
            <p>Berikut adalah beberapa proyek yang telah saya kerjakan sebagai Front-end Developer</p>
            <div className="row">
                <div className="portfolio-item col-xs-12 col-sm-6 col-md-4">
                    <div className="portfolio-item-list">
                        1
                    </div>
                </div>
                <div className="portfolio-item col-xs-12 col-sm-6 col-md-4">
                    <div className="portfolio-item-list">
                        1
                    </div>
                </div>
                <div className="portfolio-item col-xs-12 col-sm-6 col-md-4">
                    <div className="portfolio-item-list">
                        1
                    </div>
                </div>
                <div className="portfolio-item col-xs-12 col-sm-6 col-md-4">
                    <div className="portfolio-item-list">
                        1
                    </div>
                </div>
            </div>  
        </div>
    );
  }
}

export default WorkIndex;
