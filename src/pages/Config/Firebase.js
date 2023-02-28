// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHBQ5c9CF6MNPup1tgHsapcJNGm9-WuQw",
  authDomain: "backend-restaurant-4.firebaseapp.com",
  projectId: "backend-restaurant-4",
  storageBucket: "backend-restaurant-4.appspot.com",
  messagingSenderId: "203495258528",
  appId: "1:203495258528:web:2d67c9ec67934594d1ccc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);