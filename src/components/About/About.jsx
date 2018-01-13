import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div className="about__left">
            <h2>About Me</h2>
            <p>I’m Ricky Januari a Freelance Front-end Developer &amp; Designer based in Bandung - Indonesia. I have over 2 years of experience designing &amp; building websites.</p>
        </div>
        <div className="about__right">
            <h2>What I Do</h2>
            <ul>
                <li>Front-end Development</li>
                <li>Responsive Design &amp; Development</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default About;
