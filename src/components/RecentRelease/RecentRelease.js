import React from 'react';
import './RecentRelease.css';

// Components
import ARTISTS from '../../data/artists';

const RecentReleases = () => {
    const displayRecentReleases = ARTISTS.recent.map((artist) => 
            {return (
                <div className="RecentRelease">
                    <a href={artist.recent_album_url} target="_blank" rel="noopener noreferrer">
                        <img className="RecentAlbum" src={artist.recent_album_art} alt={artist.recent_album}/>
                    </a>
                    <p className="RecentTitle">{artist.recent_album}</p>
                    <p className="RecentArtist">{artist.recent_artist}</p>
                </div>
            )}
        )


    return (
        <div className="RecentReleasesMain">
            <h3>RECENT RELEASES</h3>
            <div className="RecentReleasesList">
                {displayRecentReleases}
            </div>
        </div>
    )
}

export default RecentReleases;