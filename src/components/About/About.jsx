import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row">
        <div className="col-xs-12 col-md-8">
			<div className="about-me">
				<h1>About Me</h1>
            	<p>I’m Ricky Januari a Freelance Front-end Developer &amp; Designer based in Bandung - Indonesia. I have over 2 years of experience designing &amp; building websites.</p>
            	<p>I care about an open, accessible, fast, responsive, and well-built web that puts people first. When I’m not working toward that, I’m probably reading, riding my bike</p>
			</div>
			<div className="experience">
				<h2>Work Experience</h2>
				<h3>Freelance Services</h3>
				<p>
					<p>Work Remotely from home <br/> August 2017 - Present</p>
				</p>
				<hr/>
				<h3>Front-end Web Developers - agensidigital.com, Bandung - Indonesia</h3>
				<p>Work Remotely from home <br/> August 2016 - December 2017</p>
				<h4>My responsibilities include:</h4>
				<ul>
					<li>Bringing a designer’s concept to life with HTML, CSS, and JavaScript</li>
					<li>Building reusable code and libraries for future use</li>
					<li>Implementing responsive design</li>
				</ul>
				<hr/>
				<h3>Data Entry - PT Daya Pratama Lestari, Bandung - Indonesia</h3>
				<h4>My responsibilities include:</h4>
				<ul>
					<li>Scan documents and print files, when needed</li>
				</ul>
			</div>
			<div className="experience">
				<h2>Freelance Services</h2>
          		<h3>FRONT-END DEVELOPMENT</h3>
          		<p>Organized and semantic HTML5 and CSS3 to bring your designs to life</p>
          		<h3>
            		RESPONSIVE DESIGN
          		</h3>
          		<p>No need to worry about what your website looks across devices, I specialize in bringing full desktop sites down to the smallest mobile, and in between. Consistency from your PSDs to beautiful usable mobile layouts is key.
          		</p>
          	</div>
		</div>
          <div className="col-xs-12 col-md-3">
          <h3 className="h4 mb-0">I’m Very Good With</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Design Systems</li>
            <li>Progressive Enhancement</li>
            <li>Responsive Web Design</li>
            <li>Communication</li>
            <li>Learning</li>
          </ul>
          <h3 className="h4 mb-0">I’m Getting Better With</h3>
			<ul>
				<li>Performance</li>
				<li>Build Tools (Gulp, Webpack)</li>
				<li>Typography</li>
				<li>Color Theory</li>
			</ul>
			<h3 className="h4 mb-0">I'm now learning about</h3>
			<ul>
				<li>Reactjs and React Native</li>
				<li>Vuejs</li>
				<li>Wordpress</li>
			</ul>
			</div>
        </div>
        
        
      </div>
    );
  }
}

export default About;
