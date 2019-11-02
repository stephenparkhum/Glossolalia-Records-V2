import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './HeaderNav.css';

function HeaderNav() {
  return (
      <div className="HeaderNav">
      <ul>
        <Link to="/">
          <li>news</li>
        </Link>
        <Link to="/artists">
          <li>artists</li>
        </Link>
        <a href="http://glossolaliarecords.bandcamp.com">
            <li>store</li>
        </a>
        <a href="#">
            <li>social</li>
        </a>
        <Link to="/contact">
          <li>contact</li>
        </Link>
      </ul>

    </div>
    
  );
}

export default HeaderNav;
