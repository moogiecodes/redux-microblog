import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
