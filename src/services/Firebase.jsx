import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAMaN64E3myjuoV3lBJwzmboc_wewnvuFY",
    authDomain: "coderhouse-ecommerce-13e73.firebaseapp.com",
    projectId: "coderhouse-ecommerce-13e73",
    storageBucket: "coderhouse-ecommerce-13e73.firebasestorage.app",
    messagingSenderId: "40979971357",
    appId: "1:40979971357:web:e07991c411ff22890935f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)