import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './components/home';
import SinCircle from './components/sin-circle';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/sin-circle" component={SinCircle} />
    </Router>
  </div>
);

export default App;
