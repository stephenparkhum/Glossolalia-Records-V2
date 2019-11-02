import React, { Link } from 'react';
import './Header.css';

// Child Components
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  return (
    <div className="Header">
        <div className="HeaderLogo">
            <h2>glossolalia records</h2>
        </div>
        <HeaderNav />
    </div>
  );
}

export default Header;
