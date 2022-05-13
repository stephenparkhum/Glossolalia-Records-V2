import React from 'react';
import './ArtistListItem.css';

const ArtistListItem = ({artist}) => {
    const adjustBandNameForRoute = (name) => {
        name = name.toLowerCase();
        let bandRoute = name.split(" ");
        let finalBandRoute = bandRoute.join("-");
        return finalBandRoute;
    };

    return (
        <div className="ArtistListEach">
            <a href={`${adjustBandNameForRoute(artist.band_url)}`} target="_blank" rel="noopener noreferrer">
                <img className="ArtistImgDisplay" src={artist.albums[0].cover_art} alt={artist.albums[0].title}/>
            </a>
            <h4>{artist.name}</h4>
        </div>
    )
};

export default ArtistListItem;