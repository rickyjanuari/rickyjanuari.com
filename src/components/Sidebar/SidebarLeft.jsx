import React, { Component } from "react";
import "./Sidebar.scss";
import Avatar from "../../img/profile.jpeg";
class SidebarLeft extends Component {
  render() {
    return (
    <div className="sidebar-wrapper sidebar-wrapper-left">
        <div className="sidebar-bg" id="sidebar-bg-left"></div>
        <div className="side-bar">
            <div className="sidebar-nav">
                <div className="sidebar-profile-snapshot">
                    <a className="sidebar-profile-snapshot-inner" id="sidebar-profile-snapshot-inner" href="/about">
                        <div className="sidebar-profile-pic" id="sidebar-profile-pic">
                            <img className="sidebar-profile-pic-img" src={Avatar}/></div>
                            <div className="sidebar-profile-content">
                                <div className="sidebar-profile-name" id="sidebar-profile-name">Ricky Januari</div>
                            <div className="sidebar-profile-username" id="sidebar-profile-username">@rickyjanuari</div>
                        </div>
                    </a>  
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default SidebarLeft;
