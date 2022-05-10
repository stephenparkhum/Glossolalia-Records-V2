import React from "react";
import "./Main.css";
import { Switch } from "react-router-dom";
import MainContent from "../MainContent/MainContent";

const Main = ({ title, artists }) => {
  return (
    <Switch>
      <MainContent artists={artists} title={title} />
    </Switch>
  );
};

export default Main;
