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
import ButtonMobileMenu from './components/BottomMobileMenu/BottomMobileMenu';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-65527149-2');
ReactGA.pageview(window.location.pathname + window.location.search);

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
          <ButtonMobileMenu />
        </Route>
      </Router>
      
    );
  }
}
 
export default App;
