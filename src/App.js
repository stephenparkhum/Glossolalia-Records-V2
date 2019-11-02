import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ArtistList from './components/ArtistList/ArtistList';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main title="NEWS"/>
        </Route>
        <Route path="/artists">
          <Header />
          <Main title="ARTISTS"/>
        </Route>
      </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
