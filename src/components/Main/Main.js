import React from 'react';
import './Main.css';
import NewsList from '../NewsList/NewsList';
import RecentReleases from '../RecentRelease/RecentRelease';

const Main = () => {
    return (
        <div className="Main-Content">
            <NewsList />
            <RecentReleases />
        </div>
    )
};

export default Main;