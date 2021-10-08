// import React from "react";

// function Register() {
// 	return (
// 		<div>
// 			<h1>Bienvenida soy el Register</h1>
// 		</div>
// 	)
// }

// export default Register;

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Spinner from '../spinner.svg';

import { useAuth } from '../context/AuthContext';


export const SignUp = () => {
  const { signup } = useAuth();

  const [error, setError] = useState('');
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleConfirmPassword = e => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await signup(email, password);
        history.push('/');
      } catch (error) {
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
      }
    }
    setLoading(false);
  }

  return (
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{error}</p>}
        <h1>Sign Up</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit} >
          <input type='email' placeholder='Email' onChange={handleEmail} />
          <input type='password' placeholder='Password' onChange={handlePassword} />
          <input type='password' placeholder='Confirm Password' onChange={handleConfirmPassword} />
          <input type='submit' value='Sign Up' />
        </form>
        {loading && <img src={Spinner} alt='Loading' />}
        <p>Do you already have an account? <Link to='/login'>Login</Link> </p>
      </div>

    </div>
  )
}
