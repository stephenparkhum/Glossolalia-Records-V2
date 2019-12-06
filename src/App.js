import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
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
          <Route 
            path="/artists/:artist"
            component={(props) => {
              console.log(props.match)
              return <ArtistIndividual name={props.match.params.artist} />
            }}
          />
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
