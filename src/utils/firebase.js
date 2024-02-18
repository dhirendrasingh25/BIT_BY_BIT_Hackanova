// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrKsb7u3GJF4eyizNaIs3ozzTf4Msa3_g",
  authDomain: "budget-buddy-fa092.firebaseapp.com",
  projectId: "budget-buddy-fa092",
  storageBucket: "budget-buddy-fa092.appspot.com",
  messagingSenderId: "1071822773308",
  appId: "1:1071822773308:web:89dad1bee37a88623df739",
  measurementId: "G-GEFDDWS1W4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
