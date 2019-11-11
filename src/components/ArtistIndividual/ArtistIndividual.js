import React from 'react';
import './ArtistIndividual.css';

const ArtistIndividual = (props) => {
    return (
        <div className="ArtistIndividualMain">
            <div className="ArtistLogo"></div>
            <div className="ArtistDetails">
                <div className="ArtistIndividual">
                    <h1>{props.name}</h1>
                    <p className="ArtistIndividualGenre">{props.genre}</p>
                </div>
                <div className="ArtistIndividualBio">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArtistIndividual;
