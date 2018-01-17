import React, { Component } from "react";
import avatar from "img/profile.jpeg";
import "./styles.scss";

class Avatar extends Component {
  render() {
    return (
      <img className="avatar" src={avatar}/>
    );
  }
}

export default Avatar;
