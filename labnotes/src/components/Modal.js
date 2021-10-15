import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { firebaseDB } from '../firebaseconfig';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const customStyles = {
	content: {
		height: '40%',
		width: '40%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: 'rgb(214, 205, 241)',
		border: 'node',
		boxShadow: '5px 10px rgb(64, 4, 82)'
	},
};

export const Modal = ({ note, mode, isVisible, hideModal }) => {
	const { id, titulo, nota } = note;
	const [newTitulo, setNewTitulo] = useState(titulo);
	const [newNota, setNewNota] = useState(nota);
	const [isOpen, setIsOpen] = useState(isVisible);


	const closeModal = () => {
		setIsOpen(false);
		hideModal();
	};

	const handleTituloChange = e => setNewTitulo(e.target.value);
	const handleNotaChange = e => setNewNota(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		if (mode === 'edit') {
			updateNote();

		} else {
			console.log(createNote());
		}

	}

	const createNote = async () => {
		try {
			if(newTitulo === '' || newNota === '') {
				alert('los campos deben estar llenos, para publicar la nota');
			} else {
				await addDoc(collection(firebaseDB, 'notes'), {
					titulo: newTitulo,
					nota: newNota
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}

	}

	const updateNote = async () => {
		try {
			if(newTitulo === '' || newNota === '') {
				alert('los campos deben estar llenos, para publicar la nota');
			} else {
				await setDoc(doc(firebaseDB, 'notes', id), {
					titulo: newTitulo,
					nota: newNota
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<ReactModal isOpen={isOpen} style={customStyles} appElement={document.getElementById('root')}>
			<form className='modal' onSubmit={handleSubmit}>
				<div className='modal-div-close'>
				<button className='close-button' onClick={closeModal}> X </button>
				</div>
				<input className='input-titulo' type='text' value={newTitulo} placeholder='Titulo' onChange={handleTituloChange} />
				<textarea className='textarea-note' type='text' value={newNota} placeholder='Escribe una nota' onChange={handleNotaChange} />
				{
					mode === 'edit' ?
						<button type='submit' className='edit-btn'> Edit Note</button> :
						<button type='submit' className='create-btn'> Create Note</button>
				}
			</form>
		</ReactModal>
	)
}
