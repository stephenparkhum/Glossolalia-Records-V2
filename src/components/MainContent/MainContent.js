import React from 'react';
import './MainContent.css';
import {
    Switch,
    Route
} from "react-router-dom";
import NewsListItem from '../NewsList/NewsListItem/NewsListItem';
import RecentReleases from '../RecentRelease/RecentRelease';
import ArtistList from '../ArtistList/ArtistList';
import Contact from '../Contact/Contact';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faBandcamp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MainContent = (props) => {
    return (
        <>
        <div className="MainContent">
            <div className="MainNews"> 
                <h1>{props.title}</h1>
                <Switch>
                    <Route exact path="/">
                        <NewsListItem />
                        <NewsListItem />
                        <NewsListItem />
                    </Route>
                    <Route path="/artists">
                        <ArtistList />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>  
            </div>
            <Switch>
                <Route exact path="/">
                    <RecentReleases />
                </Route>
            </Switch>
        </div>
        <div className="leftSocial">
            <a href="http://glossolaliarecords.bandcamp.com" target="_blank">
                <FontAwesomeIcon icon={faBandcamp} size="lg"/>
            </a>
            <a href="https://www.facebook.com/glossolaliarecords/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg"/>
            </a>
            <a href="https://www.instagram.com/glossolalia__records/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
            </a>
            <a href="https://www.youtube.com/channel/UCK0npcbZ33IppLUiq5GFh6A" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="lg"/>
            </a>
            
        </div>
            
        

        </>
        
        
    )
}

export default MainContent;