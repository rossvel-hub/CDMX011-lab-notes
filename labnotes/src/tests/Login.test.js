import { enableIndexedDbPersistence } from '@firebase/firestore';
import '@testing-library/jest-dom'
import React from 'react';
import { Login } from '../components/Login'

describe('test en Login', () => {

	it('Renderiza apropiadamente', () => {
		render(<Login />)
		expect(screen.getByText(/Continue with/i)).toBeInTheDocument()
	})

	it('Test placeholder', () => {

		const contentEmail = screen.getByPlaceholderText('email')
		const contentPassword = screen.getByPlaceholderText('email')

		expect(contentEmail).toBeInTheDocument()
		expect(contentPassword).toBeInTheDocument()

	})

	// test('Debe mostrarse correctamente', () => {
	// 	const wrapper = shallow(<Login/>);
	// 	expect( wrapper ).toMatchSnapshot();
	// })
});


