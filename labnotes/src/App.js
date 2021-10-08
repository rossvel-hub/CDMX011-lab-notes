import React from 'react'
import './App.css';
// import {createAccount, isUser} from './firebaseconfig'
// import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import  Login  from './components/Login'
import  Home  from './components/Home';
// import Notes from './components/Notes'
import SingUp from './components/SingUp'
// import CreateNotes from './components/CreateNotes'
import { AuthProvider } from './context/AuthContext';

function App() {

	// const [user, setUser] = useState(null)

	// const handleLogin =(email, password)=> {
	// 	createAccount(email, password);
	// }

	// 	const auth = getAuth();
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
				//setUser(user.uid);
			// ...
		// 	} else {
		// 	// User is signed out
		// 	// ...
		// 	}
		// });

	return (
		<>
		<AuthProvider>
		<Router>
      <div>
        <Switch>
          <Route path='/Login' component={Login}></Route>
					<Route path='/SingUp' component={SingUp}></Route>
					<Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
		</AuthProvider>
		</>
	);
}

export default App;

