// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJr5GyTGnH7Q4PhuJQh9v6cva4_vqHW_I",
  authDomain: "aiapp-6f779.firebaseapp.com",
  projectId: "aiapp-6f779",
  storageBucket: "aiapp-6f779.appspot.com",
  messagingSenderId: "60948825731",
  appId: "1:60948825731:web:20f68ebe61e0b6d3b53db6",
  measurementId: "G-7WW1KGDK73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);