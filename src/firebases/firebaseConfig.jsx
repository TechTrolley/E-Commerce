// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk5b52HS2cQqX9N5IM0FgK9b6z9LYOiQg",
  authDomain: "techtrolley-ecee2.firebaseapp.com",
  projectId: "techtrolley-ecee2",
  storageBucket: "techtrolley-ecee2.firebasestorage.app",
  messagingSenderId: "492814187999",
  appId: "1:492814187999:web:26a97a2c51b76b1108d86a",
  measurementId: "G-5Z8NR4QJ1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);

export {auth,db};