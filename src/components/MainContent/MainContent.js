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


const MainContent = (props) => {
    return (
        <>
        <div className="MainContent">
            <div className="MainNews"> 
                <h1>{props.title}</h1>
                <Switch>
                    <Route path="/">
                        <NewsListItem />
                        <NewsListItem />
                        <NewsListItem />
                        
                    </Route>
                    <Route path="/artists">
                        <p>Artists here</p>
                    </Route>
                </Switch>  
            </div>
            <Switch>
                <Route path="/">
                    <RecentReleases />
                </Route>
            </Switch>
            
        </div>
            
        

        </>
        
        
    )
}

export default MainContent;