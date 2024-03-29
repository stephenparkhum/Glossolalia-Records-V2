import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";

// Main component
function HeaderNav() {
	return (
		<div className="HeaderNav">
			<ul>
				<NavLink exact to="/" activeClassName="nav-active">
					<li>news</li>
				</NavLink>
				<NavLink activeClassName="nav-active" to="/artists">
					<li>artists</li>
				</NavLink>
				<a
					href="http://glossolaliarecords.bandcamp.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<li>store</li>
				</a>
				<NavLink activeClassName="nav-active" to="/contact">
					<li>contact</li>
				</NavLink>
				<a
					href="http://eepurl.com/dACxuP"
					target="_blank"
					rel="noopener noreferrer"
				>
					<li>mailing list</li>
				</a>
			</ul>
		</div>
	);
}

export default HeaderNav;
