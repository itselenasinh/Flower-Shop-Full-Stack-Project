// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0nFIMHMddtkXb6WOZ-XmzlzRyMZU66ug",
  authDomain: "full-flower-proyect.firebaseapp.com",
  projectId: "full-flower-proyect",
  storageBucket: "full-flower-proyect.appspot.com",
  messagingSenderId: "913675994011",
  appId: "1:913675994011:web:f8dbdff714a72eab6f973e",
  measurementId: "G-0WZF035V8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;
