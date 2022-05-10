import React from "react";
import "./MainContent.css";
import { Switch, Route } from "react-router-dom";
import NewsListItem from "../NewsList/NewsListItem/NewsListItem";
import RecentReleases from "../RecentRelease/RecentRelease";
import ArtistList from "../ArtistList/ArtistList";
import Contact from "../Contact/Contact";

const MainContent = ({ title, artists }) => {
  return (
    <>
      <div className="MainContent">
        <div className="MainNews">
          <h1>{title}</h1>
          <Switch>
            <Route exact path="/">
              <NewsListItem />
            </Route>
            <Route path="/artists">
              <ArtistList artists={artists} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path="/">
            <RecentReleases />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default MainContent;
