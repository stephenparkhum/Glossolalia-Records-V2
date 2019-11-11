import React from 'react';
import {Link} from 'react-router-dom';
import './ArtistListItem.css';

const ArtistListItem = ({artist}) => {
    return (
        <div className="ArtistListEach">
            <Link to="/artist/gash">
                <img className="ArtistImgDisplay" src={artist.albums[0].cover_art} alt={artist.albums[0].title}/>
            </Link>
            <h4>{artist.name}</h4>
        </div>
    )
};

export default ArtistListItem;