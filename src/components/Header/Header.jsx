import React, { Component } from "react";
import "./Header.scss";
import Link from "gatsby-link";
class Header extends Component {
  render() {
    return (
    <div>
      <header className="header">
        <div className="top-bar">
        <div className="container">
        <nav>
                <Link to="/" className="logo-link">@rickyjanuari</Link>
                <div className="right-menu">
                  <Link to="/blog" activeStyle={{color: '#00CECE'}}>blog</Link>
                    <Link to="/about" activeStyle={{color: '#00CECE'}}>About</Link>
                    <Link to="/contact" activeStyle={{color: '#00CECE'}}>Contact</Link>
                    <Link to="/portfolio" activeStyle={{color: '#00CECE'}}>Portfolio</Link>
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
