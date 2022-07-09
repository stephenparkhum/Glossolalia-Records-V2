import PropTypes from "prop-types";
import React from "react";
import ArtistListItem from "./ArtistListItem/ArtistListItem";
import "./ArtistList.css";

const ArtistList = ({ artists }) => {
	const artistListDisplay = artists.map(artist => (
		<div key={artist}>
			<ArtistListItem artist={artist} />
		</div>
	));

	return <div className="ArtistListMain">{artistListDisplay}</div>;
};

ArtistList.propTypes = {
	artists: PropTypes.array,
};

export default ArtistList;
