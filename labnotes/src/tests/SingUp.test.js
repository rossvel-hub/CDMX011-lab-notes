import React from 'react';
import {  render, fireEvent, screen } from '@testing-library/react'
import { SingUp } from '../components/SingUp';

test('cargar pagina'), async () => {
	render(<SingUp/>)

	// click button
	fireEvent.click(screen.getByText('Continue with Google'))
}


