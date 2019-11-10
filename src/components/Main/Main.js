import React from 'react';
import './Main.css';
import {
    Switch,
  } from "react-router-dom";
import MainContent from '../MainContent/MainContent';

const Main = (props) => {
    return (
        <Switch>
            <MainContent title={props.title}/>
        </Switch>
    )
};

export default Main;