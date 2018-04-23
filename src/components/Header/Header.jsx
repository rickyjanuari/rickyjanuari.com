import React, { Component } from "react";
import "./Header.scss";
import Avatar from 'components/Avatar';
import FaBars from 'react-icons/lib/fa/bars';
import Link from "gatsby-link";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="top-bar">
          <div className="container">
          <Link to="/" className="logo-link">
            <Avatar/>
          </Link>
          
            <nav className="right-menu">
            <Link to="/" className="menu-mobile"><FaBars/></Link>
              <ul>
                <li>
                <Link to="/blog" activeStyle={{color: '#00CECE'}}>Blog</Link>
                </li>
                <li><Link to="/work" activeStyle={{color: '#00CECE'}}>Work</Link></li>
                <li><Link to="/about" activeStyle={{color: '#00CECE'}}>About</Link></li>
                <li><Link to="/contact" activeStyle={{color: '#00CECE'}}>Contact</Link></li>
              </ul>  
            </nav>
          </div>
            
        </div>
      </header>
    );
  }
}

export default Header;
