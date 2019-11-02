import React from 'react';
import './Main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NewsList from '../NewsList/NewsList';
import RecentReleases from '../RecentRelease/RecentRelease';
import MainContent from '../MainContent/MainContent';

const Main = (props) => {
    return (
        <Switch>
            <MainContent title={props.title}/>
        </Switch>
    )
};

export default Main;