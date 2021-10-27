import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';
import { FormLogin } from '../components/FormLogin';
import googleIcon from '../assets/google.png'


export const Login = () => {

  const { login, singinWithGoogle } = useAuth();
	const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (email, password) => {
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
            <FormLogin handleSubmit={handleSubmit} />

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
