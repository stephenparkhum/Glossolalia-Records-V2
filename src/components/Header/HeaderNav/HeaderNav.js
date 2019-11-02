import React from 'react';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <div className="HeaderNav">
      <ul>
        <a href="#">
            <li>news</li>
        </a>
        <a href="#">
            <li>artists</li>
        </a>
        <a href="http://glossolaliarecords.bandcamp.com">
            <li>store</li>
        </a>
        <a href="#">
            <li>social</li>
        </a>
        <a href="#">
            <li>contact</li>
        </a>
      </ul>

    </div>
  );
}

export default HeaderNav;
