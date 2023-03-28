// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUI7nEJgIAg47H-MU7mP6o59GGgN5ajUU",
  authDomain: "firechat10-afd03.firebaseapp.com",
  projectId: "firechat10-afd03",
  storageBucket: "firechat10-afd03.appspot.com",
  messagingSenderId: "98834088471",
  appId: "1:98834088471:web:bd75a56b68212b327a1252"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
