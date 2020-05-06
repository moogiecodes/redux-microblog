import React from 'react';
import './App.css';
import NavBar from './NavBar';

import { Route, Switch, Redirect } from 'react-router-dom';
import TitleList from './TitleList';
import NewPostContainer from './NewPostContainer';
import PostDetails from './PostDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <TitleList />
        </Route>
        <Route exact path="/new">
          <NewPostContainer />
        </Route>
        <Route exact path="/:postId">
          <PostDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
