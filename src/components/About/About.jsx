import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="content-container about">
        <div className="about__left">
            <h2>About Me</h2>
            <p>I’m Ricky Januari a Freelance Front-end Developer &amp; Designer based in Bandung - Indonesia. I have over 2 years of experience designing &amp; building websites.</p>
            <p>I care about an open, accessible, fast, responsive, and well-built web that puts people first. When I’m not working toward that, I’m probably reading, riding my bike</p>
        </div>
        <div className="about__right">
            <h2>What I Do</h2>
            <ul>
                <li>Front-end Development</li>
                <li>Responsive Design &amp; Development</li>
            </ul>
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
    <li>React</li>
  </ul>
        </div>
      </div>
    );
  }
}

export default About;
