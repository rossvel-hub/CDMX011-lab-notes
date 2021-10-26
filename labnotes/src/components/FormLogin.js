import React from 'react'
import userIcon from '../assets/user.png'
import passwordIcon from '../assets/password.png'
import { useAuth } from '../context/AuthContext';


export const FormLogin = ({handleSubmit, handleEmail, handlePassword}) => {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

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
