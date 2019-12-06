import React from 'react';
import './ArtistIndividual.css';
import {
    useParams,
} from "react-router-dom";

import ARTISTS from '../../data/artists';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faBandcamp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const ArtistIndividual = (props) => {
    const adjustRouteNameForBand = (name) => {
        name = name.toUpperCase();
        let bandRoute = name.split("-");
        let finalBandRoute = bandRoute.join(" ");
        return finalBandRoute;
    };

    // const getCurrentArtist = ARTISTS.filter(word => word.name.toLowerCase() === props.match.artist);

    return (
        <div className="ArtistIndividualMain">
            <div className="ArtistSubMain">
                <div className="ArtistLogo"></div>
                    <div className="ArtistDetails">
                        <div className="ArtistIndividual">
                            <h1>{adjustRouteNameForBand(props.name)}</h1>
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
            <div className="ArtistFooter">
                <div className="ArtistFooterSocial">
                    <h2>Social</h2>
                    <div className="SocialIcons">
                        <FontAwesomeIcon icon={faBandcamp} size="lg"/>
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                        <FontAwesomeIcon icon={faYoutube} size="lg"/>
                    </div>
                </div>
                <div className="ArtistReleases">
                    <h2>Releases</h2>
                </div>
            </div>
            
        </div>
    )
}

export default ArtistIndividual;
