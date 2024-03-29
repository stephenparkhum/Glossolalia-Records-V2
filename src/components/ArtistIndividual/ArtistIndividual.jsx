import React from "react";
import PropTypes from "prop-types";
import "./ArtistIndividual.css";

import ARTISTS from "../../data/artists";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faBandcamp,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const DisplaySocials = () => (
	<div className="ArtistFooterSocial">
		<h2>Social</h2>
		<div className="SocialIcons">
			<FontAwesomeIcon icon={faBandcamp} size="lg" />
			<FontAwesomeIcon icon={faInstagram} size="lg" />
			<FontAwesomeIcon icon={faFacebook} size="lg" />
			<FontAwesomeIcon icon={faYoutube} size="lg" />
		</div>
	</div>
);

const ArtistIndividual = props => {
	const adjustRouteNameForBand = name => {
		name = name.toUpperCase();
		let bandRoute = name.split("-");
		return bandRoute.join(" ");
	};

	const getCurrentArtist = (currentArtist, props) => {
		currentArtist = currentArtist.toUpperCase();
		console.log(props.name);
		let currentArtistDisplay = adjustRouteNameForBand(props.name);
		for (let i = 0; i < ARTISTS.length; i++) {
			if (ARTISTS[i].name.toUpperCase() === currentArtist.toUpperCase()) {
				currentArtistDisplay = ARTISTS[i];
				console.log(currentArtistDisplay);
				return currentArtistDisplay;
			}
		}
	};

	let currentArtistObject = getCurrentArtist(props.name, props);

	return (
		<div className="ArtistIndividualMain">
			{}
			<div className="ArtistSubMain">
				<div className="ArtistLogo"></div>
				<div className="ArtistDetails">
					<div className="ArtistIndividual">
						<h1>{adjustRouteNameForBand(props.name)}</h1>
						<p className="ArtistIndividualGenre">{props.genre}</p>
					</div>
					<div className="ArtistIndividualBio">
						<p>{currentArtistObject.bio}</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
			<div className="ArtistFooter">
				<DisplaySocials />
				<div className="ArtistReleases">
					<h2>Releases</h2>
				</div>
			</div>
		</div>
	);
};

ArtistIndividual.propTypes = {
	name: PropTypes.string,
	genre: PropTypes.string,
};

export default ArtistIndividual;
