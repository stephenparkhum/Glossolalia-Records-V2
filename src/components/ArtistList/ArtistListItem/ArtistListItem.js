import React from 'react';
import './ArtistListItem.css';

const ArtistListItem = ({artist}) => {
    return (
        <div className="ArtistListEach">
            <img className="ArtistImgDisplay" src={artist.albums[0].cover_art} alt={artist.albums[0].title}/>
            <h4>{artist.name}</h4>
        </div>
    )
};

export default ArtistListItem;