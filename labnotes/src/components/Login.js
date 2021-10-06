import React from "react";
import { useState } from "react";

function Login ({ handleLogin }) {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	return (
		<div>
			<label>
				Email:
				<input type="text" onChange={(e) => { setEmail(e.target.value) }} />
			</label>
			<label>
				Password:
			<input type="password" onChange={(e) => { setPass(e.target.value) }} />
			</label>
			<button onClick={() => {handleLogin(email, pass)}}>Iniciar Sesion</button>
		</div>
	)
}

export default Login;
