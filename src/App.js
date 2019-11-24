import React, {Component} from 'react';
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

class App extends Component {

  render() { 

    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main title="NEWS"/>
          </Route>
          <Route exact path="/artists">
            <Main title="ARTISTS"/>
          </Route>
          {/* <Route 
            path="/artists/:id" 
            render={(name) => {
              return (
                <ArtistIndividual 
                  name={name}
                />
              )
            }}
          /> */}
          <Route path="/artists/gash">
            <ArtistIndividual 
              name="Gash"
              genre="Death Metal"  
            />
          </Route>
          <Route path="/contact">
            <Main title="CONTACT"/>
          </Route>
        </Switch>
        </div>
        <Route path="/">
          <LeftSocial />
        </Route>
      </Router>
      
    );
  }
}
 
export default App;
