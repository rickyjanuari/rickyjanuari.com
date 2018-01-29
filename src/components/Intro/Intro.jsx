import React, { Component } from "react";
import "./Intro.scss";
import avatar from "../../img/profile.jpeg"

class Intro extends Component {
  render() {
    return (
      <section className="intro intro--blue">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 intro__content">
                        <h1 className="intro__header">Hi, I'm Ricky Januari</h1>
                        <p className="intro__text">Front-End Developer and Web Designer based in Bandung, Indonesia</p>
                        <a href="/about" className="btn">About Me</a>
                        <a href="/contact" className="btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Intro;
