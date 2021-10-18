import {useState, useEffect } from 'react';
import { firebaseDB } from '../firebaseconfig'
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';

export const useData = (collectionName) => {
	const [docs, setDocs] = useState ([]);
	const { userId } = useAuth();

	useEffect(() => {
		const q = query(collection(firebaseDB, "notes"), /*where('uid','==', userId()),*/ orderBy('fecha', 'desc'));
	 onSnapshot(q, (querySnapshot) => {
		const documents = [];
		querySnapshot.forEach((doc) => {
				documents.push({ id: doc.id, ...doc.data() });
		});
						setDocs(documents);
				})
	}, [])
	return { docs }
}
