// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3cWg73uOtLqfJ1J8Apj0W73qMpJQ8qKU",
    authDomain: "digital-product-marketpl-3b394.firebaseapp.com",
    projectId: "digital-product-marketpl-3b394",
    storageBucket: "digital-product-marketpl-3b394.firebasestorage.app",
    messagingSenderId: "908561579785",
    appId: "1:908561579785:web:c41cb36fb0bf384afa9dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);