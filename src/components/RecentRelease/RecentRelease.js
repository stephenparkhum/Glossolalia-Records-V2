import React from 'react';
import './RecentRelease.css';

const RecentReleases = () => {
    return (
        <div className="RecentReleasesMain">
            <h3>Recent Releases</h3>
            <div className="RecentReleasesList">
                <div className="RecentRelease">
                        <div className="RecentAlbum">
                        </div>
                        <p className="RecentTitle">Album Title</p>
                        <p className="RecentArtist">Artist</p>
                </div>
                <div className="RecentRelease">
                        <div className="RecentAlbum">
                        </div>
                        <p className="RecentTitle">Album Title</p>
                        <p className="RecentArtist">Artist</p>
                </div>
                <div className="RecentRelease">
                        <div className="RecentAlbum">
                        </div>
                        <p className="RecentTitle">Album Title</p>
                        <p className="RecentArtist">Artist</p>
                </div>
            </div>
        </div>
    )
}

export default RecentReleases;