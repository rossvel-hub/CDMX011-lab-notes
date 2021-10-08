// import { async } from "@firebase/util";
import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
	const { Login } = useAuth();
	const [error, setError] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			await Login(email, password)
		} catch (error){
			setError("Wrong Crendentials")
			setTimeout(() => setError(''), 1500);
		}
	}

	return (
		<div>
			<div>
				 {error && <p className="error">{{ error }}</p>}
				 <h1>Log In</h1>
			</div>
			<div className="">
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Email" onChange={handleEmail}/>
					<input type="password" placeholder="Password" onChange={handlePassword}/>
					<input type="submit" placeholder="Log In"/>
				</form>
				<p>Don't have an account? <Link to='/singup'></Link></p>
			</div>

		</div>
	)
}
export default Login;








// function Login ({ handleLogin }) {
// 	const [email, setEmail] = useState('')
// 	const [pass, setPass] = useState('')

// 	return (
// 		<div>
// 			<label>
// 				Email:
// 				<input type="text" onChange={(e) => { setEmail(e.target.value) }} />
// 			</label>
// 			<label>
// 				Password:
// 			<input type="password" onChange={(e) => { setPass(e.target.value) }} />
// 			</label>
// 			<button onClick={() => {handleLogin(email, pass)}}>Iniciar Sesion</button>
// 		</div>
// 	)
// }
//export default Login;
