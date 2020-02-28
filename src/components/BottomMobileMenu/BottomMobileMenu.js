import React from 'react';
import './BottomMobileMenu.css';

function ButtonMobileMenu() {
    return (
        <div className="bottom-mobile-menu">
            <ul>
                <li><a href="/">news</a></li>
                <li><a href="/artists">artists</a></li>
                <li><a href="http://glossolaliarecords.bandcamp.com">store</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </div>
    );
}

export default ButtonMobileMenu;