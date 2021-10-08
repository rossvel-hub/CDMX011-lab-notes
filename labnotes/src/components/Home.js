import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');


  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
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

