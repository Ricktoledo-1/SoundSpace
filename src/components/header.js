import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Header extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <br />
        <Link to="./random">Discovery</Link>
        <br />
        <Link to="./Artists">Top-Artists</Link>
        <br />
        <Link to="./Videos">Music-Videos</Link>
      </div>
    );
  }
}

export default Header;
