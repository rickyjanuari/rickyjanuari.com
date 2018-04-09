import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Contact from "components/Contact/Contact";
import config from "../../../data/SiteConfig";
import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "neal-react";
import "./styles.scss";

class ServiceIndex extends Component {
  render() {
    return (
        <div className="work-page">
            <Helmet title={`Work | ${config.siteTitle}`} />
            <div id="intro" className="our-services">
				<div className="container">
					<h1 id="main-content">Services</h1>
					<div className="center-text">	
						<p>We offer expert level coding solutions for PSD to HTML conversions. We can deliver perfect results for projects including PSD to Wordpress conversions, and we can even help you create email marketing pieces with our PSD to Email conversion services.</p>
					</div>
				</div>
			</div>
			<div id="content">  
				<div className="container"> 
					<div className="center-text">           
						<h2><strong>Our Core</strong> Features</h2>
						<p>Our team of coding experts can convert your PSD document into everything from a fully-functional HTML page, to any one of a number of Wordpress templates. We work to exceed customer expectations, and we deliver superior customer service.</p>
					</div>
					<ul className="row ">
						<li className="col-md-6 psd-to-html">
							<span className="icon"><em>PSD TO HTML</em></span>
							<h3><a href="psd-to-html">PSD TO HTML</a></h3>
							<p>Give us your PSD document and we will produce a hand-coded pixel-perfect HTML page that has all of the functionality you need. Every project is hand-checked by our coding experts to check for streamlined code, and to get the best SEO results.</p>
						</li>
						<li className="col-md-6 opencart right">
							<span className="icon"><em>PSD TO OPENCART</em></span>
							<h3><a href="psd-to-opencart">PSD TO OPENCART</a></h3>
							<p>We convert your PSD file to an Opencart theme that is cross-compatible with a wide variety of browsers and ready to serve as your ecommerce site. We will work closely with your business to meet your deadlines and incorporate every feature you need into your Opencart theme.</p>
						</li>
						<li className="col-md-6 psd-to-email">
							<span className="icon"><em>PSD TO EMAIL</em></span>
							<h3><a href="psd-to-email">PSD TO EMAIL</a></h3>
							<p>You know your customers better than anyone, and that is why a perfect PSD to email conversion is essential for your email marketing success. We create a pixel-perfect translation of your PSD document into any of the major email formats to give you the results you need.</p>
						</li>
						<li className="col-md-6 psd-to-wordpress right">
							<span className="icon"><em>PSD TO WORDPRESS</em></span>
							<h3><a href="psd-to-wordpress">PSD TO WORDPRESS</a></h3>
							<p>Our team of coding experts can translate your PSD document into any one of a number of professional looking Wordpress themes. Wordpress is the most popular CMS on the Internet, and we put all of the flexibility and functionality of Wordpress into your hands.</p>
						</li>
					</ul>			
				</div>
				<section className="why-choose-us">
					<div className="container">
						<h2><strong>Why Clients</strong> Choose Us</h2>
						<div class="right">
							<p>We offer a team of experienced and professional coders who deliver hand-coded results that are verified for accuracy. We offer cross-compatibility with a wide variety of popular platforms and around-the-clock support to make sure your project is done the way you want it.</p>
							<p>We put our guarantee on all of our work, including the solutions that you can customize on your own. We offer coding that is done to the latest industry standards so you know that your website will be available to the widest possible audience.</p>
						</div>
					</div>
				</section>
			</div>
        </div>
    );
  }
}

export default ServiceIndex;