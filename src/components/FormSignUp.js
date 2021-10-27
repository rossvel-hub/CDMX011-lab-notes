import React, { useState } from 'react';
import userIcon from '../assets/user.png'
import passwordIcon from '../assets/password.png'

export const FormSignup = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

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
            <div>
                <img src={passwordIcon} alt='' />
                <input type='password' placeholder='Confirmar contraseña' onChange={handleConfirmPassword} required />
            </div>
            <input type='submit' data-testid='submit-testSign'className='btn-login' value='Sing Up'
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(email, password, confirmPassword);
                }} />
        </form>
    )

}