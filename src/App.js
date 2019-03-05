import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Lessons from './components/Lessons/Lessons';
import Labs from './components/Labs/Labs';
import Concepts from './components/Concepts/Concepts';
import Career from './components/Career/Career';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lessons" render={(renderProps) => <Lessons />} />
            <Route path="/labs" render={(renderProps) => <Labs />} />
            <Route path="/concepts" render={(renderProps) => <Concepts />} />
            <Route path="/career" render={(renderProps) => <Career />} />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
