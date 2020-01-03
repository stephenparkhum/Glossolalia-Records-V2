import React from 'react';
import './Header.css';

// Child Components
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  return (
    <div className="Header">
        <div className="HeaderLogo">
            <h2><a href="/">glossolalia records</a></h2>
        </div>
        <HeaderNav />
    </div>
  );
}

export default Header;
