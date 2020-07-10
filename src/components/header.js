import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="">Home</Link>
        <br />
        <Link to="/random">Random songs</Link>
        <br />
        <Link to="">Alphabetical</Link>
      </div>
    );
  }
}

export default Header;
