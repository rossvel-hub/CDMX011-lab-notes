import  { initializeApp }  from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyD_7BN7_1AcLdt4mxW6FHA-AamHkCB0kFQ",
	authDomain: "lab-notes-3878b.firebaseapp.com",
	projectId: "lab-notes-3878b",
	storageBucket: "lab-notes-3878b.appspot.com",
	messagingSenderId: "492527429794",
	appId: "1:492527429794:web:63d44fd4e10dfc9fc54ffb",
	measurementId: "G-4YFBST3Z0Q"
};
initializeApp(firebaseConfig);

export const createAccount = (email, password) => {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Bien!!!')
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
			console.log('malisimooooooo')
		});
}



