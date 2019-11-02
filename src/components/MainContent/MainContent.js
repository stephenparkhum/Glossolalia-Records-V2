import React from 'react';
import './MainContent.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewsListItem from '../NewsList/NewsListItem/NewsListItem';
import RecentReleases from '../RecentRelease/RecentRelease';
import ArtistList from '../ArtistList/ArtistList';


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
                </Switch>  
            </div>
            <Switch>
                <Route exact path="/">
                    <RecentReleases />
                </Route>
            </Switch>
            
        </div>
            
        

        </>
        
        
    )
}

export default MainContent;