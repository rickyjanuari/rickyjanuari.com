import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Contact from "components/Contact/Contact";
import config from "../../../data/SiteConfig";
import "./styles.scss";
import jpauc from "img/portfolio/jpauc.jpg";
import automarket from "img/portfolio/automarket.jpg";
import hmd from "img/portfolio/hmd.jpg";
import trendy168 from "img/portfolio/trendy168.jpg";
import bermuda from "img/portfolio/bermuda.jpg";
import carsway from "img/portfolio/carsway.jpg";
import querella from "img/portfolio/querella.jpg";
import crauc from "img/portfolio/crauc.jpg";
import tihotline from "img/portfolio/tihotline.jpg";
import trendyagent from "img/portfolio/trendyagent.jpg";
class WorkIndex extends Component {
  render() {
    return (
        <div className="work-page container contact-container">
            <Helmet title={`Work | ${config.siteTitle}`} />
            <h2>Work is done</h2>
            <p>Here are some projects I've worked on as Front-end Developer</p>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={querella} />
                        <div className="work__description">
                            <a className="work_name" href="https://querella.herokuapp.com/" target="_blank"><h4>querella</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend Developer, PSD to HTML , Responsinve Design
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={tihotline} />
                        <div className="work__description">
                            <a className="work_name" href="https://tihotline.com/" target="_blank"><h4>tihotline.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend Developer, PSD to HTML , Responsinve Design
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={trendyagent} />
                        <div className="work__description">
                            <a className="work_name" href="https://agent.jpauc.com" target="_blank"><h4>Trendy Agent</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend Developer, PSD to HTML , Responsinve Design
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={jpauc} />
                        <div className="work__description">
                            <a className="work_name" href="http://jpauc.com" target="_blank"><h4>jpauc.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend modifications
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={automarket} />
                        <div className="work__description">
                            <a className="work_name" href="http://market.jpauc.com" target="_blank"><h4>market.jpauc.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend Developer, PSD to HTML , Responsinve Design All Page
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={hmd} />
                        <div className="work__description">
                            <a className="work_name" href="http://apmotor-jpauc.com/auction" target="_blank"><h4>apmotor-jpauc.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend modifications Wesbite Agent From web jpauc.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={crauc} />
                        <div className="work__description">
                            <a className="work_name" href="http://crauc.com/" target="_blank"><h4>crauc.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend modifications Wesbite Agent From web jpauc.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={trendy168} />
                        <div className="work__description">
                            <a className="work_name" href="http://trendy168.co.jp" target="_blank"><h4>trendy168.co.jp</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend Developer With Wordpress
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={bermuda} />
                        <div className="work__description">
                            <a className="work_name" href="http://bermuda-niaga.com/" target="_blank"><h4>bermuda-niaga.com</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend modifications Wesbite Agent  jpauc.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="work__wrap">
                        <img className="work__img" src={carsway} />
                        <div className="work__description">
                            <a className="work_name" href="http://www.carsway.com.hk/" target="_blank"><h4>carsway.com.hk/</h4></a>
                            <span className="c-portfolio-item__tags">
                                Frontend modifications Wesbite Agent From web jpauc.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
  }
}

export default WorkIndex;
