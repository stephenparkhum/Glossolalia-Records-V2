import React from 'react';
import './NewsListItem.css';

const NewsListItem = () => {
    return (
        <div className="NewsListItem">
            <h2>News Heading</h2>
                <p className="NewsListDate">7/19/2019</p>
                <p className="NewsListContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Posuere sollicitudin aliquam ultrices sagittis. 
                </p>
                <p className="NewsListContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Posuere sollicitudin aliquam ultrices sagittis. 
                </p>
            </div>
    )
};

export default NewsListItem;