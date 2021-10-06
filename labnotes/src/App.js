import React, { useState } from 'react'
import './App.css';
import Formulario from './components/Formulario'
import Welcome from './components/Welcome'
import {createAccount, isUser} from './firebaseconfig'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter as Router, Switch, Route, link} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Notes from './components/Notes'
import Register from './components/Register'
import CreateNotes from './components/CreateNotes'

function App() {

	const [user, setUser] = useState(null)

	const handleLogin =(email, password)=> {
		createAccount(email, password);
	}

		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(user.uid);
			// ...
			} else {
			// User is signed out
			// ...
			}
		});

	return (
	// 	 <Router>
	// 	<div className="App">
	// 	{user?<Welcome/>:<Formulario handleLogin={handleLogin}/>}

	// </div>
	// 	</Router>
		<Router>
      <div>
        <Switch>
          <Route path='/login'> {user?<Notes/>:<Login handleLogin={handleLogin}/>}</Route>
          <Route path='/Register' component={Register}></Route>
					<Route path='/Notes' component={Notes}></Route>
					<Route path='/CreateNotes' component={CreateNotes}></Route>
					<Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
	);
}

export default App;

