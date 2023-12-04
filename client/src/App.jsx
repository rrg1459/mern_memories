import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Auth } from './components/Auth/Auth';

console.log('xxx process.env-->: ', process.env);

const App = () => (
  <GoogleOAuthProvider clientId='197370610713-p9ga128lfg6ur5f1h8otloc2lg95bgg5.apps.googleusercontent.com'>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

export default App;

// 26:12