import './App.css';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
// import { Home } from './components/Home';

import { AuthProvider } from './context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import { Container } from './components/Container';
import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router >
          <Switch>
            <PrivateRoute exact path='/' component={Container} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
