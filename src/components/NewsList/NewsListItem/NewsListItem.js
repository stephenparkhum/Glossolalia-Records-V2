import React from 'react';
import './NewsListItem.css';

const NewsListItem = () => {
    return (
        <div className="NewsListItem">
            <h2>Cowardice / Grst Split Tape</h2>
                <p className="NewsListDate">5/1/2019</p>
                <p className="NewsListContent">
                    Glossolalia Records is proud to announce a new split between Cowardice and Grst, 
                    to be made available digitally and on cassette May 1, 2019. 
                    The is available for streaming and ordering HERE.
                </p>
                <p className="NewsListContent">
                    Hailing from the east coast, Cowardice debuted forcefully in 2016 and has enraptured ears with their distinctive sludge via several significant 
                    releases in the intervening years. This most recent expulsion is the consequence of a long 
                    conspiracy with diffuse black metallers and Glossolalia alumni, Grst. 
                    The resulting block of music is a challengingly dour 40 minutes worthy of its state-spanning 
                    efforts.
                </p>
            </div>
    )
};

export default NewsListItem;