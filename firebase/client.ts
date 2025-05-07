// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9vdfWx0SzCQAyI-r3JGGKbuShTh_cKo",
  authDomain: "prepwithai-d1285.firebaseapp.com",
  projectId: "prepwithai-d1285",
  storageBucket: "prepwithai-d1285.firebasestorage.app",
  messagingSenderId: "224857094032",
  appId: "1:224857094032:web:3150272185994e029e6515",
  measurementId: "G-4RLR8DX6LP"
};

// Initialize Firebase
const app = !getApps.length?  initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)