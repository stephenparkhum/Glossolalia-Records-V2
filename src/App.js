import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ArtistIndividual from './components/ArtistIndividual/ArtistIndividual';
import LeftSocial from './components/LeftSocial/LeftSocial';

function App(props) {
  console.log(props);

  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main title="NEWS"/>
        </Route>
        <Route path="/artists">
          <Main title="ARTISTS"/>
        </Route>
        <Route path="/contact">
          <Main title="CONTACT"/>
        </Route>
        <Route path="/artist/gash">
          <ArtistIndividual 
            name="Gash"
            genre="Death Metal"  
          />
        </Route>
      </Switch>
      </div>
      <Route path="/">
        <LeftSocial />
      </Route>
    </Router>
    
  );
}

export default App;
