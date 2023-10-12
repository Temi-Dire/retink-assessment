// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkaX_DAkpm90V3a1r_m9T1NkE23XTCw28",
  authDomain: "my-assessment-a56c8.firebaseapp.com",
  projectId: "my-assessment-a56c8",
  storageBucket: "my-assessment-a56c8.appspot.com",
  messagingSenderId: "809390196550",
  appId: "1:809390196550:web:9f1f16b6e06fcf167f8747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };