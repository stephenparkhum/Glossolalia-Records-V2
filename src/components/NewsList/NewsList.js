import React from 'react';
import './NewsList.css';
import NewsListItem from './NewsListItem/NewsListItem';

const NewsList = (props) => {
    return (
        <div className="Main-News"> 
        <h1>{props.title}</h1>
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
        </div>
    )
}

export default NewsList;