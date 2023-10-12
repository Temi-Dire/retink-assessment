// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnE8gUBmgU8DjlN31it_29vVdUxn7yDBo",
  authDomain: "rentink-8e571.firebaseapp.com",
  projectId: "rentink-8e571",
  storageBucket: "rentink-8e571.appspot.com",
  messagingSenderId: "437433205766",
  appId: "1:437433205766:web:d0399ab62d9e505bcaaf87",
  measurementId: "G-HNE8G1Z4C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);