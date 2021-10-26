import React from "react";
import { render } from '@testing-library/react'
import Note from '../components/Note'

test('Renderizar el contenido de Note', () => {
	const note = {
		content: 'Soy una pruebita',
		important: true
	}

	const component = render(< Note note={note}/>)
	console.log(component)
});
