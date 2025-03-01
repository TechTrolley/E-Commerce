// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUXRiWCxsvpRUYwQy7XQaZGsQIL3nWc-8",
  authDomain: "tech-trolley-56955.firebaseapp.com",
  projectId: "tech-trolley-56955",
  storageBucket: "tech-trolley-56955.firebasestorage.app",
  messagingSenderId: "119708213906",
  appId: "1:119708213906:web:5ea1345dc374c44ee0fc4b",
  measurementId: "G-VFP7ELWZ7D"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
 // Make sure this line is present
 const auth = getAuth(app); 

// Initialize Firebase Analytics (Optional)
const analytics = getAnalytics(app);

// Export auth correctly
export { auth };
