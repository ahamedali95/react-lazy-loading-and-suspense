import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Information from './components/Information';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={({ history }) => (<Home history={history} />)} />
      <Route exact path="/information" render={({ history }) => (<Information history={history} />)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);