import PropTypes from "prop-types";
import React from "react";
import "./ArtistListItem.css";

const ArtistListItem = ({ artist }) => {
	console.log(artist);

	// Maybe use later
	// const adjustBandNameForRoute = name => {
	// 	name = name.toLowerCase();
	// 	let bandRoute = name.split(" ");
	// 	let finalBandRoute = bandRoute.join("-");
	// 	return finalBandRoute;
	// };

	return (
		<div className="ArtistListEach">
			<a href={artist.bandcamp} target="_blank" rel="noopener noreferrer">
				<img
					className="ArtistImgDisplay"
					src={artist.bandPhoto}
					alt={artist.bandName}
				/>
			</a>
			<h4>{artist.bandName}</h4>
		</div>
	);
};

ArtistListItem.propTypes = {
	artist: {
		band_url: PropTypes.string,
		name: PropTypes.string,
		albums: PropTypes.array,
	},
};

export default ArtistListItem;
