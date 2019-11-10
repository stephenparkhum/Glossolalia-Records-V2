import React from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";
import './HeaderNav.css';

function HeaderNav() {
  return (
      <div className="HeaderNav">
      <ul>
        <NavLink 
          exact to="/"
          activeClassName="nav-active"
        >
          <li>news</li>
        </NavLink>
        <NavLink activeClassName="nav-active" to="/artists">
          <li>artists</li>
        </NavLink>
        <a href="http://glossolaliarecords.bandcamp.com">
            <li>store</li>
        </a>
        <a href="#">
            <li>social</li>
        </a>
        <NavLink activeClassName="nav-active" to="/contact">
          <li>contact</li>
        </NavLink>
      </ul>

    </div>
    
  );
}

export default HeaderNav;
