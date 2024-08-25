// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCg2p8dkdNy33An1ug-WIbdG-dpeNrVAo",
  authDomain: "flashcard-saas-8f075.firebaseapp.com",
  projectId: "flashcard-saas-8f075",
  storageBucket: "flashcard-saas-8f075.appspot.com",
  messagingSenderId: "701054143282",
  appId: "1:701054143282:web:47c88139b3ddaa38e7e52b",
  measurementId: "G-492CMGBT2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}