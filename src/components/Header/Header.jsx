import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
    <div>
      <header className="header">
        <div className="top-bar">
        <div className="container">
        <nav>
                <a href="/" class="logo-link" id="logo-link" aria-label="DEV Home">@rickyjanuari</a>
                <div className="right-menu">
                    <a href="/work">Work</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/portfolio">Portfolio</a>
                </div>
            </nav>
        </div>
            
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
