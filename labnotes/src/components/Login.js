import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';
import googleIcon from '../assets/google.png'
import { FormLogin } from './FormLogin';

export const Login = () => {
  const { login, singinWithGoogle } = useAuth();
	const [error, setError] = useState(null);
	 const [email] = useState('');
   const [password] = useState('');

	// const handleEmail = e => setEmail(e.target.value);
  // const handlePassword = e => setPassword(e.target.value);

  const history = useHistory();

	const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 1500);
    }
  }

	const handleSingInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await singinWithGoogle();
      history.push('/');
    } catch (error) {
      setError('Something happens');
      setTimeout(() => setError(''), 1500);
    }
  }

  return (
    <main className='login'>
        <section className='container'>
            <header className='header'>
              <img src={logo} alt='logo'/>
            </header>
            {error && <p className='error' >{ error }</p>}
		{/* <form onSubmit={handleSubmit}>
			<div>
				<img src={userIcon} alt='' />
				<input type="email" placeholder='Email' onChange={handleEmail} required />
			</div>
			<div>
				<img src={passwordIcon} alt='' />
				<input type='password' placeholder='Contraseña' onChange={handlePassword} required />
			</div>
			<input type='submit' className='btn-login' value='Log In' />
		</form> */}

					  <FormLogin handleSubmit ={handleSubmit} handleEmail={handleEmail} handlePassword={handlePassword}/>
            <h3>Continue with</h3>
            <section className='social-media'>
                <div>
                    <img src={googleIcon} alt=''/>
                    <a href='/#' onClick={handleSingInWithGoogle}>Continue with Google</a>
                </div>
                <br/>
                <p className='register'>
                    No tienes cuenta?
                    <Link to='/signup'> Crear cuenta</Link>
                </p>
            </section>
        </section>
    </main>
  )
}
