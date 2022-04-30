// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtriFdL8TQe5eiGjB-RNYeA7QqVEWlBRI",
  authDomain: "car-dealer-cccff.firebaseapp.com",
  projectId: "car-dealer-cccff",
  storageBucket: "car-dealer-cccff.appspot.com",
  messagingSenderId: "719003749673",
  appId: "1:719003749673:web:742014ce452c4faaf5fb38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;