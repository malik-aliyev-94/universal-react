import React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/not-exist">404</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default Navigation;
