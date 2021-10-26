import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
	apiKey: "AIzaSyD_7BN7_1AcLdt4mxW6FHA-AamHkCB0kFQ",
	authDomain: "lab-notes-3878b.firebaseapp.com",
	projectId: "lab-notes-3878b",
	storageBucket: "lab-notes-3878b.appspot.com",
	messagingSenderId: "492527429794",
	appId: "1:492527429794:web:63d44fd4e10dfc9fc54ffb",
	measurementId: "G-4YFBST3Z0Q"
});

//provedor para authenticar x email y password
export const auth = firebase.auth();

//En caso de utilizar mas provedores aqui se en listarian
//Esto es para user el provedor de google para authenticar
export const authWithGoogle = new firebase.auth.GoogleAuthProvider();

export const firebaseDB = getFirestore(app);

export default app;


