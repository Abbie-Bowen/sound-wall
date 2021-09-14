
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ConsonantChart from './components/ConsonantChart';
import VowelValley from './components/VowelValley';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path ="/"> <Home /> </Route>
          <Route path ="/consonant-chart"> <ConsonantChart /> </Route>
          <Route path ="/vowel-valley"> <VowelValley /> </Route>
          <Route path ="/about"> <About /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
