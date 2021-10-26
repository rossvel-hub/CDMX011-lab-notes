//import React from 'react'
import React, { useState } from 'react';
import userIcon from '../assets/user.png'
import passwordIcon from '../assets/password.png'



export const FormLogin = ({handleSubmit}) => {

	const [setEmail] = useState('');
  const [setPassword] = useState('');

	const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<img src={userIcon} alt='' />
				<input type="email" placeholder='Email' onChange={handleEmail} required />
			</div>
			<div>
				<img src={passwordIcon} alt='' />
				<input type='password' placeholder='Contraseña' onChange={handlePassword} required />
			</div>
			<input type='submit' className='btn-login' value='Log In' />
		</form>
	)
}
