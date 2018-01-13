import React, { Component } from "react";
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className="intro intro--blue">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-5 intro__content">
                        <h1 className="intro__header">Freelance Front-end Developer &amp; Designer.</h1>
                        <p className="intro__text">I make the internet a more beautiful place, building elegant, functional and modern websites.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Hero;
