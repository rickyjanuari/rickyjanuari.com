import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
    <div>
      <header className="header">
        <div className="top-bar">
            <nav>
                <a href="/" class="logo-link" id="logo-link" aria-label="DEV Home">@rickyjanuari</a>
                <div className="right-menu">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/portfolio">Portfolio</a>
                </div>
                
            </nav>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
