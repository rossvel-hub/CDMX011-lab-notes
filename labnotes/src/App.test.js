import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it("renders without crashing", () => {
	const {container} = render(<App />);
	expect(container.outerHTML).not.toBeUndefined();
});

// beforeEach(() => render (<App/>))

// test('test componente App', () => {

// 	const contentEmail = screen.getByPlaceholderText('Email')
// 	const contentPassword = screen.getByPlaceholderText('Contraseña')

// 	expect(contentEmail).toBeInTheDocument()
// 	expect(contentPassword).toBeInTheDocument()

// });
