// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAHF_U8esCC1O0O_Y1eNvy-iUeJJg5188Q",
  authDomain: "crwn-db-88043.firebaseapp.com",
  projectId: "crwn-db-88043",
  storageBucket: "crwn-db-88043.appspot.com",
  messagingSenderId: "992535945902",
  appId: "1:992535945902:web:d896ad4431fdb7651c033f"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;;