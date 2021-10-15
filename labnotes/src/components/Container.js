import React, { useState } from 'react';
import { Note } from './Note';
import { useData } from '../hooks/useData';
import { Modal } from './Modal';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';
// import { collection, onSnapshot, QuerySnapshot } from '@firebase/firestore';
// import { firebaseDB } from '../firebaseconfig';

export const Container = () => {

	const [setError] = useState('');
	const { logout } = useAuth();
	const { docs: notes } = useData('notes');

	// useEffect (() => {
	// 	const q = query(collection(firebaseDB, 'notes'));
	// 	onSnapshot(q, (querySnapshot) => {
	// 		const documents = [];
	// 		querySnapshot.forEach(doc => {
	// 			documents.push({id: doc.id, ...doc.data() })
	// 		});
	// 		setNotes(documents);
	// 	});
	// }, []);

	const [isVisible, setIsVisible] = useState(false);

	const showModal = () => setIsVisible(true);
	const hideModal = () => setIsVisible(false);

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			setError('Server Error')
		}
	}

	const newNote = { titulo : '', nota: '' }
	return (
		<>
			<div className="logout">
				<img src={logo} alt='logo' />
				<span className="material-icons" onClick={handleLogout}>
					exit_to_app
				</span>

			</div>

			<div className='containerNotes'>
				<main className='content'>
					<div className='notes'>
						{
							notes.map((note) => (
								<Note key={note.id} note={note} />
							))
						}
					</div>
				</main>
			</div>
			<button className='big-add show-add-note' onClick={showModal}>
				<i className='material-icons'>add</i>
			</button>
			{
				isVisible &&
				<Modal mode='create' isVisible={isVisible} note={newNote} hideModal={hideModal} />
			}
		</>
	)
}
