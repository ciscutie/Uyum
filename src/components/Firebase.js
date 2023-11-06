// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_cpSu_AKOpZkB9CK1V68JrYYWvYEAu1k',
  authDomain: 'u-yum-c2605.firebaseapp.com',
  projectId: 'u-yum-c2605',
  storageBucket: 'u-yum-c2605.appspot.com',
  messagingSenderId: '644597035290',
  appId: '1:644597035290:web:8b2710141240a328e67ca3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firestore instance after initializing app
export const db = getFirestore(app);