import React from 'react';
import './NewsList.css';
import NewsListItem from './NewsListItem/NewsListItem';

const NewsList = () => {
    return (
        <div className="Main-News"> 
        <h1>NEWS</h1>
        <NewsListItem />
        <NewsListItem />
        <NewsListItem />
        </div>
    )
}

export default NewsList;