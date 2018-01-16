import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Contact from "components/Contact/Contact";
import config from "../../../data/SiteConfig";
import "./styles.scss";

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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099596/rickyjanuari.com/querella.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099596/rickyjanuari.com/tihotline.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099596/rickyjanuari.com/trendyagent.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099597/rickyjanuari.com/jpauc.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099597/rickyjanuari.com/automarket.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099596/rickyjanuari.com/hmd.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099597/rickyjanuari.com/crauc.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099597/rickyjanuari.com/trendy168.jpg" />
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
                        <img className="work__img" src="http://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099598/rickyjanuari.com/bermuda.jpg" />
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
                        <img className="work__img" src="https://res.cloudinary.com/codesains/image/upload/c_scale,w_500/v1516099596/rickyjanuari.com/carsway.jpg" />
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
