import React, { Fragment, useState } from 'react';
import { Note } from './Note';
import { useData } from '../hooks/useData';
import { Modal } from './Modal';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';

export const Container = () => {

	const [setError] = useState('');
	const { logout, currentUser } = useAuth();
	const { docs: notes, userId, userEmail } = useData('notes');
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

	const newNote = { titulo : '', nota: ''}
	return (
		<Fragment>
			<header className="notes-header">
				<img src={logo} alt='logo' />
				<h3 className='color-user'><br/>{userEmail}</h3>
				<img src={currentUser.photoURL} alt='foto de usuario' className='profile'/>
				<span className="material-icons" onClick={handleLogout}>
					exit_to_app
				</span>
			</header>

			<div className='notes-container'>
					<div className='notes-grid'>
						{
							notes.map((note) => (
								<Note key={note.id} note={note} userId={userId}/>
							))
						}
					</div>
			</div>
			<button className='big-add show-add-note' onClick={showModal}>
				<i className='material-icons'>add</i>
			</button>
			{
				isVisible &&
				<Modal mode='create' isVisible={isVisible} note={newNote} hideModal={hideModal} userId={userId}/>
			}
		</Fragment>
	)
}
