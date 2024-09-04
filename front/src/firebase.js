// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMz79HNpnvW0xJ7ukWDEMKcAPRlpcJykQ",
  authDomain: "rottentomatoes-clone.firebaseapp.com",
  projectId: "rottentomatoes-clone",
  storageBucket: "rottentomatoes-clone.appspot.com",
  messagingSenderId: "306979032087",
  appId: "1:306979032087:web:667c79c35897ea1cb26052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)

 export {auth}