import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebaseconfig'
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebaseconfig';

// export const getCurrentUserId = (currentUserObj) =>
// {
// 	return currentUserObj.uid;
// }

export const useData = (collectionName) => {
	const [docs, setDocs] = useState([]);
	const [userId, setUserId] = useState('');
	const [userEmail, setUserEmail] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUserId(user.uid);
				setUserEmail(user.email);
				const q = query(collection(firebaseDB, collectionName), where('uid','==', user.uid), orderBy('fecha', 'desc'));
				onSnapshot(q, (querySnapshot) => {
					const documents = [];
					querySnapshot.forEach((doc) => {
						documents.push({ id: doc.id, ...doc.data() });
					});
					setDocs(documents);
				})
			}
		})
	}, [])
	return { docs, userId, userEmail }
}
