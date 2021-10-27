import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo.svg';
import googleIcon from '../assets/google.png'
import { FormSignup } from '../components/FormSignUp';
import { useAuth } from '../context/AuthContext'

export const SignUp = () => {
  const { signup, singinWithGoogle } = useAuth();
  const [error, setError] = useState(null);
  
  const history = useHistory();

  const handleSubmit = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Contraseñas no coinciden');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await signup(email, password);
        history.push('/');
      } catch (error) {
        setError('Error de servidor');
        setTimeout(() => setError(''), 1500);
      }
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
    <main className='singup'>
        <section className='container'>
            <header className='header'>
              <img src={logo} alt='logo'/>
            </header>
            {error && <p className='error' >{ error }</p>}
            <FormSignup handleSubmit={handleSubmit} />
            <h3>Continue with</h3>
            <section className='social-media'>
                <div>
                    <img src={googleIcon} alt=''/>
                    <a href='/#' onClick={handleSingInWithGoogle}>Continue with Google</a>
                </div>
                <br/>
                <p className='register'>
                    Ya tienes cuenta?
                    <Link to='/login'> Inicia sesion</Link>
                </p>
            </section>
        </section>
    </main>
  )
}


// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import userIcon from '../assets/user.png'
// import passwordIcon from '../assets/password.png'
// import googleIcon from '../assets/google.png'

// import { useAuth } from '../context/AuthContext'

// export const SignUp = () => {
//   const { signup, singinWithGoogle } = useAuth();
//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const history = useHistory();

//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);
//   const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Contraseñas no coinciden');
//       setTimeout(() => setError(''), 1500);
//     } else {
//       try {
//         await signup(email, password);
//         history.push('/');
//       } catch (error) {
//         setError('Error de servidor');
//         setTimeout(() => setError(''), 1500);
//       }
//     }
//   }

//   const handleSingInWithGoogle = async (e) => {
//     e.preventDefault();
//     try {
//       await singinWithGoogle();
//       history.push('/');
//     } catch (error) {
//       setError('Something happens');
//       setTimeout(() => setError(''), 1500);
//     }
//   }

//   return (
//     <main className='singup'>
//         <section className='container'>
//             <header className='header'>
//               <img src={logo} alt='logo'/>
//             </header>
//             {error && <p className='error' >{ error }</p>}

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <img src={userIcon} alt=''/>
//                     <input type="email" placeholder='Email' onChange={handleEmail} required/>
//                 </div>
//                 <div>
//                     <img src={passwordIcon} alt=''/>
//                     <input type='password' placeholder='Contraseña' onChange={handlePassword} required/>
//                 </div>
//                 <div>
//                     <img src={passwordIcon} alt=''/>
//                     <input type='password' placeholder='Confirmar contraseña' onChange={handleConfirmPassword} required />
//                 </div>
//                 <input type='submit' className='btn-login' value='Sing Up' />
//             </form>

//             <h3>Continue with</h3>
//             <section className='social-media'>
//                 <div>
//                     <img src={googleIcon} alt=''/>
//                     <a href='/#' onClick={handleSingInWithGoogle}>Continue with Google</a>
//                 </div>
//                 <br/>
//                 <p className='register'>
//                     Ya tienes cuenta?
//                     <Link to='/login'> Inicia sesion</Link>
//                 </p>
//             </section>
//         </section>
//     </main>
//   )
// }
