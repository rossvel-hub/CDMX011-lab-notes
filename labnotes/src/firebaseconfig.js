import  { initializeApp }  from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export const auth=getAuth();
export default firebaseConfig;



