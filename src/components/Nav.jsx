import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'black'
  }

  return (
    <nav>
      <h3>Are you creating a new organization?</h3>
      <ul>
        <Link style={navStyle} to="/admin">
          <li>Yes</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>No</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
