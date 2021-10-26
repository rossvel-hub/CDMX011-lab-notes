import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Home = () => {
	const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Server Error')
    }
  }

  return (
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{error}</p>}
        <img src='https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png' alt='user' className='user-photo' />
      </div>
      <div className='card-body'>
        <h1>Welcome</h1>
        <p>{currentUser.email}</p>
        <button className='logout-button' onClick={handleLogout} >Log Out</button>
      </div>

    </div>
  )
}
