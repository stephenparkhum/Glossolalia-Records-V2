import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link to={`/artist/${adjustBandNameForRoute(artist.name)}`}>
                <img className="ArtistImgDisplay" src={artist.albums[0].cover_art} alt={artist.albums[0].title}/>
            </Link>
            <h4>{artist.name}</h4>
        </div>
    )
};

export default ArtistListItem;