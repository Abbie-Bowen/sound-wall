
import React from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';

import Home from './components/Home';
import ConsonantChart from './components/ConsonantChart';
import VowelValley from './components/VowelValley';
import About from './components/About';
import NoMatch from './components/NoMatch';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path ="/sound-wall"> <Redirect to="/"/> </Route>
          <Route exact path ="/"> <Home /> </Route>
          <Route path ="/consonant-chart"> <ConsonantChart /> </Route>
          <Route path ="/vowel-valley"> <VowelValley /> </Route>
          <Route path ="/about"> <About /> </Route>
          <Route path="*"> <NoMatch /></Route>
        </Switch>
      </div>
  );
}

export default withRouter(App);
