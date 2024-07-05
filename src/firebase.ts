// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Your web app's Firebase configuration (from the Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDx8f82WyHYHdgCQjaxzzEuw94YutO30sg",
    authDomain: "should-i-e932b.firebaseapp.com",
    projectId: "should-i-e932b",
    storageBucket: "should-i-e932b.appspot.com",
    messagingSenderId: "316166563561",
    appId: "1:316166563561:web:90033e7554c1404363b278",
    measurementId: "G-EX8N24E8J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth: Auth = getAuth(app);

export { auth };



