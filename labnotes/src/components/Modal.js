import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { firebaseDB } from '../firebaseconfig';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";


const customStyles = {
	content: {
		minHeight: '40%',
		width: '65%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		borderRadius: '15px',
		backgroundImage: 'linear-gradient(to top, rgb(214, 205, 241) 30%, rgb(222, 236, 235) 100%)',
		boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
	},
};

export const Modal = ({ note, mode, isVisible, hideModal, userId }) => {
	const { id, titulo, nota } = note;
	const uid = userId;
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
			createNote();
		}

	}

	const createNote = async () => {
		try {
			if (newTitulo === '' || newNota === '') {
				alert('los campos deben estar llenos, para publicar la nota');
			} else {
				await addDoc(collection(firebaseDB, 'notes'), {
					titulo: newTitulo,
					nota: newNota,
					fecha: Date.now(),
					uid: uid,
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}
	}

	const updateNote = async () => {
		try {
			if (newTitulo === '' || newNota === '') {
				alert('los campos deben estar llenos, para publicar la nota');
			} else {
				await setDoc(doc(firebaseDB, 'notes', id), {
					titulo: newTitulo,
					nota: newNota,
					fecha: Date.now(),
					uid: uid,
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<ReactModal isOpen={isOpen} style={customStyles} appElement={document.getElementById('root')}>
			<div className='modal-header'>
				<span className='material-icons modal-close-btn' onClick={closeModal}>
					cancel
				</span>
			</div>
			<form className='modal-form' onSubmit={handleSubmit}>
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
