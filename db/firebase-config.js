// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCT4l9kOF5Ud679ddZ1eBovYj7_EpF7HKc",
    authDomain: "ecommerce-403a5.firebaseapp.com",
    projectId: "ecommerce-403a5",
    storageBucket: "ecommerce-403a5.appspot.com",
    messagingSenderId: "966057346576",
    appId: "1:966057346576:web:7c7dc3671beeed623a2c95",
    measurementId: "G-1VDTWTBWWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;