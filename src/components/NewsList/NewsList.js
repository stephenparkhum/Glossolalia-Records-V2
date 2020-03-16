import React from 'react';
import './NewsList.css';
import NewsListItem from './NewsListItem/NewsListItem';

const NewsList = (props) => {
    return (
        <>
        <div className="Main-News"> 
        <h1>{props.title}</h1>
            <NewsListItem />
        </div>
        </>
    )
}

export default NewsList;