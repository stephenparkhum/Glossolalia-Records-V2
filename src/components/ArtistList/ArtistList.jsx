import React from "react";
import ArtistListItem from "./ArtistListItem/ArtistListItem";
// import ARTISTS from '../../data/artists';
import "./ArtistList.css";

const ArtistList = ({ artists }) => {
  console.log(artists);
  const artistListDisplay = artists.map((artist) => (
    <div key={artist}>
      <ArtistListItem artist={artist} />
    </div>
  ));

  return <div className="ArtistListMain">{artistListDisplay}</div>;
};

export default ArtistList;
