import React, {useState} from "react";
import { firebaseDB } from '../firebaseconfig'
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from './Modal';

export const Note = ({ note }) => {
	 const fecha = new Date(note.fecha).toLocaleDateString('es-MX',{year:'numeric', month:'2-digit', day:'2-digit'});
	console.log(fecha);
	const { id, nota, titulo} = note;

	const [isVisible, setIsVisible] = useState(false);

 const showModal= () => setIsVisible(true);
 const hideModal = () => setIsVisible(false);

	const deleteNote = async () => {
		try {
			if(window.confirm('Deseas eliminar la nota')){
				await deleteDoc(doc(firebaseDB, 'notes', id));
			}
			}catch (error) {
			console.error(error);
		}
	}

	return (
		<article className='note-card'>
			<div className='note-card-header'>
				<h3>{titulo}</h3>
			</div>
				<div className='note-card-body'>
					<p>{nota}</p>
					<br/>
				</div>
			<div className='note-card-footer'>
				<p className='date-last-modification'>{fecha}</p>
				<div className="action-icons">
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
