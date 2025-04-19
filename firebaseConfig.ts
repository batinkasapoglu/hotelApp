// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ie9qQIUVvWxIGRkaocGG8Ro5LpfotoA",
  authDomain: "gorev-986dc.firebaseapp.com",
  projectId: "gorev-986dc",
  storageBucket: "gorev-986dc.firebasestorage.app",
  messagingSenderId: "945259369571",
  appId: "1:945259369571:web:ec4ef00935ba5a0fafd456",
  measurementId: "G-WCXKT5B492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;