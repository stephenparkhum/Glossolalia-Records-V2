import React from "react";
import "./LeftSocial.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBandcamp,
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LeftSocial = () => {
	return (
		<div className="leftSocial">
			<a
				href="http://glossolaliarecords.bandcamp.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faBandcamp} size="lg" />
			</a>
			<a
				href="https://www.facebook.com/glossolaliarecords/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faFacebook} size="lg" />
			</a>
			<a
				href="https://www.instagram.com/glossolalia__records/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faInstagram} size="lg" />
			</a>
			<a
				href="https://www.youtube.com/channel/UCK0npcbZ33IppLUiq5GFh6A"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faYoutube} size="lg" />
			</a>
		</div>
	);
};

export default LeftSocial;
