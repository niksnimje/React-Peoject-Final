// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB32nYEcYhZlkJG9vSyknQN5Ay5JDji5ko",
  authDomain: "login-9eed4.firebaseapp.com",
  projectId: "login-9eed4",
  storageBucket: "login-9eed4.appspot.com",
  messagingSenderId: "671932566626",
  appId: "1:671932566626:web:a1f31d34c358c764d6553b",
  measurementId: "G-ZNLW1JG006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);