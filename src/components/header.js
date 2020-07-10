import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Header extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <br />
        <Link to="/components/random">Discovery</Link>
        <br />
        <Link to="./components/Artists">Top-Artists</Link>
      </div>
    );
  }
}

export default Header;
