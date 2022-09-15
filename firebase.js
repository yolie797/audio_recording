// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCPeF8GdN8hfThUjs-b98x-EWMw83zy04",
  authDomain: "audiorecording-cc05e.firebaseapp.com",
  projectId: "audiorecording-cc05e",
  storageBucket: "audiorecording-cc05e.appspot.com",
  messagingSenderId: "1024173996853",
  appId: "1:1024173996853:web:972048b28c44517f4b6a7c",
  measurementId: "G-1VQCJMS4DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);               