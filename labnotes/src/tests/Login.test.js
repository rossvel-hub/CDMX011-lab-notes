//import { enableIndexedDbPersistence } from '@firebase/firestore';
// import React from 'react';
// import {  cleanup,render, fireEvent, screen } from '@testing-library/react'
// import { FormLogin } from '../components/FormLogin';

// afterEach(cleanup);

// test("sobre el componente FormLogin", () => {
//   const mockHandleLogin = jest.fn();
// 	render(<FormLogin handleLogin={(mockHandleLogin)} />);

//   const contentEmail = screen.getByPlaceholderText('fakemail@fakemail.com');
//   const contentPasswords = screen.getByPlaceholderText('*******');

//   const buttonLogin = screen.getByText('Log In');

//   expect(contentEmail).toBeInTheDocument();
//   expect(contentPasswords).toBeInTheDocument();

//   const emailValue = "bono@bon.com";
//   const passwordValue = "12345678";

//   fireEvent.change(contentEmail, { target: { value: emailValue } });
//   fireEvent.change(contentPasswords, { target: { value: passwordValue } });

//   fireEvent.click(buttonLogin);
//   expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
// });

