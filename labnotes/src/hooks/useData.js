import {useState, useEffect } from 'react';
import { firebaseDB } from '../firebaseconfig'
import { collection, query, onSnapshot } from "firebase/firestore";

export const useData = (collectionName) => {
	const [docs, setDocs] = useState ([]);

	useEffect(() => {
		const q = query(collection(firebaseDB, "notes"));
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
