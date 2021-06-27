import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCy3sWt24GYPK10to4ewyI7PQ1INzfswjs',
	authDomain: 'clone-2f3e4.firebaseapp.com',
	projectId: 'clone-2f3e4',
	storageBucket: 'clone-2f3e4.appspot.com',
	messagingSenderId: '1039107960607',
	appId: '1:1039107960607:web:8a04b38832b902bedc8a2a',
	measurementId: 'G-EPH6P5LBH2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
