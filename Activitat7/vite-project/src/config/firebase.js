import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDdUTGlSByTYty6c99jkJt3PxVQ48bJo5A",
    authDomain: "fir-f1d35.firebaseapp.com",
    databaseURL: "https://fir-f1d35-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-f1d35",
    storageBucket: "fir-f1d35.appspot.com", 
    messagingSenderId: "468293921583",
    appId: "1:468293921583:web:d9ef6b714b1bbc4b018fda",
    measurementId: "G-Y2BQPFZ006"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };