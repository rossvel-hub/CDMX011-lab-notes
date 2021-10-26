import React from 'react';
import '@testing-library/react';
import { cleanup,render, fireEvent, screen } from '@testing-library/react'
import { FormLogin } from '../components/FormLogin';

afterEach(cleanup);

test("Test sobre el componente FormLogin", () => {
  const mockHandleLogin = jest.fn();
	render(<FormLogin handleSubmit={(mockHandleLogin)} />);

  const contentEmail = screen.getByPlaceholderText('Email');
  const contentPasswords = screen.getByPlaceholderText('Contraseña');

  const buttonLogin = screen.getByText('Log In');

  expect(contentEmail).toBeInTheDocument()
  expect(contentPasswords).toBeInTheDocument();

  const emailValue = "bono@bon.com";
  const passwordValue = "12345678";

  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPasswords, { target: { value: passwordValue } });

  fireEvent.click(buttonLogin);
  expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
});

