// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFY16tNcmcQqHfRWLOjVrmx4gqLBXzthc",
  authDomain: "tred-bazar.firebaseapp.com",
  projectId: "tred-bazar",
  storageBucket: "tred-bazar.firebasestorage.app",
  messagingSenderId: "573630139274",
  appId: "1:573630139274:web:f56e46f9de605bdd115673",
  measurementId: "G-WLMSY979HR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)