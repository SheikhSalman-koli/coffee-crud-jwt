// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_wzvXWikffVys253vFUnTf01dENoOTY",
  authDomain: "simple-firebase-learning-65d95.firebaseapp.com",
  projectId: "simple-firebase-learning-65d95",
  storageBucket: "simple-firebase-learning-65d95.firebasestorage.app",
  messagingSenderId: "24697393096",
  appId: "1:24697393096:web:ce950396a89b61beb33afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);