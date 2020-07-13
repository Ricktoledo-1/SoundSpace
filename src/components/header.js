import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="">Home</Link>
        <br />
        <Link to="">Genre</Link>
     <br />
        <Link to="/random"> Try something New</Link>
      </div>
    );
  }
}

export default Header;
