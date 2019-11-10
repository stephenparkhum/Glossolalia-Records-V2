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
import Contact from './components/Contact/Contact';
import NewsList from './components/NewsList/NewsList';

function App() {
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
      </Switch>

      </div>
    </Router>
    
  );
}

export default App;
