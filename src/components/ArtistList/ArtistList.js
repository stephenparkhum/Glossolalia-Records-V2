import React from 'react';
import ArtistListItem from './ArtistListItem/ArtistListItem';
import ARTISTS from '../../data/artists';
import './ArtistList.css';

const ArtistList = () => {
    const artistListDisplay = ARTISTS.map(artist => <div key={artist}><ArtistListItem artist={artist}/></div>)

    return (
        <div className="ArtistListMain">
            {artistListDisplay}
        </div>
    )
};

export default ArtistList;