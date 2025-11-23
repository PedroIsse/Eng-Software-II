// js/firebase.js
// Centralized Firebase initialization and exports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3dP8jtH0isgqlqIiBXHyDzscW9ha3OvA",
    authDomain: "uniride-8b7e9.firebaseapp.com",
    projectId: "uniride-8b7e9",
    storageBucket: "uniride-8b7e9.firebasestorage.app",
    messagingSenderId: "336015345420",
    appId: "1:336015345420:web:ee9c3af4f50d18ad54ab29"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
