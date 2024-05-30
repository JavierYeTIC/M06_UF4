// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDdUTGlSByTYty6c99jkJt3PxVQ48bJo5A",
  authDomain: "fir-f1d35.firebaseapp.com",
  projectId: "fir-f1d35",
  storageBucket: "fir-f1d35.appspot.com",
  messagingSenderId: "468293921583",
  appId: "1:468293921583:web:d9ef6b714b1bbc4b018fda",
  measurementId: "G-Y2BQPFZ006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);