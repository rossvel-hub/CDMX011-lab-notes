import React, { Fragment } from 'react';
import './App.css';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Container } from './components/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

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
