import React, {useState} from "react";
import { firebaseDB } from '../firebaseconfig'
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from './Modal';

export const Note = ({ note }) => {
	const { id, nota, titulo } = note;

	const [isVisible, setIsVisible] = useState(false);

 const showModal= () => setIsVisible(true);
 const hideModal = () => setIsVisible(false);

	const deleteNote = async () => {
		// try {
		// 	let opcion = confirm('Clicka en Aceptar o Cancelar');
		// 			if (opcion === true) {
		// 				await deleteDoc(doc(firebaseDB, 'notes', id));
		// 	} else {
		// 			alert ('elegiste eliminar');
		// 	}}
		// 	catch (error) {
		// 			console.error(error);
		// 		}
		try {
			alert ('Deseas eliminar la nota')
				await deleteDoc(doc(firebaseDB, 'notes', id));
			}catch (error) {
			console.error(error);
		}
	}

	return (
		<article className='note'>
			<div className='note-header'>
				<h3>{titulo}</h3>
			</div>
				<div className='note-body'>
				<p>{nota}</p>
				</div>
			<div className='note-footer'>
				<div className="action-icons float-right">
				<i className="material-icons action-icon" role="button" title="Edit" onClick={showModal}>edit</i>
				<i className="material-icons action-icon" role="button" title="Delete" onClick={deleteNote} >delete</i>
				</div>
			</div>

		{
			isVisible &&
			<Modal note={note} mode='edit' isVisible={isVisible} hideModal={hideModal}/>
		}
		</article>

	)
}
