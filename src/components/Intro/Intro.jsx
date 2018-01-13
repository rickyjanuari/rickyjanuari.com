import React, { Component } from "react";
import "./Intro.scss";
import avatar from "../../img/profile.jpeg"

class Intro extends Component {
  render() {
    return (
      <section className="intro intro--blue">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-5 intro__content">
                        <img src={avatar} alt="Ricky Januari"/>
                        <h1 className="intro__header">Hello, I am Ricky Januari</h1>
                        <p className="intro__text">Front-End Developer and Web Designer based in Bandung, Indonesia</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Intro;
