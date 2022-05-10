import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ArtistIndividual from "./components/ArtistIndividual/ArtistIndividual";
import LeftSocial from "./components/LeftSocial/LeftSocial";
import ButtonMobileMenu from "./components/BottomMobileMenu/BottomMobileMenu";
import { artistsRef } from "./firebaseSetup";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-65527149-2");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    artistsRef.on("value", (snapshot) => {
      let allArtists = [];
      snapshot.forEach((snap) => {
        allArtists.push(snap.val());
      });
      setArtists(allArtists);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main title="NEWS" />
          </Route>
          <Route exact path="/artists">
            <Main artists={artists} title="ARTISTS" />
          </Route>
          <Route
            path="/artists/:artist"
            component={(props) => {
              return <ArtistIndividual name={props.match.params.artist} />;
            }}
          />
          <Route path="/contact">
            <Main title="CONTACT" />
          </Route>
        </Switch>
      </div>
      <Route path="/">
        <LeftSocial />
        <ButtonMobileMenu />
      </Route>
    </Router>
  );
};

export default App;
