import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.scss';
import Header from './components/header';
import ReactLogo from './components/react-logo';
import Home from './components/home';
import { SinCircle } from './components/sin-circle';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/logo">
            <ReactLogo />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sin-circle">
            <SinCircle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
