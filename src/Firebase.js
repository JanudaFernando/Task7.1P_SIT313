// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzAEZNlNnSpEzFkNCqhLSCoUT6wo-Cw8",
  authDomain: "sit313-2fff2.firebaseapp.com",
  projectId: "sit313-2fff2",
  storageBucket: "sit313-2fff2.firebasestorage.app",
  messagingSenderId: "78647578379",
  appId: "1:78647578379:web:b1e14cc4391cd898b35c0e",
  measurementId: "G-6RK70YX9JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export the app instance as well
export default app;