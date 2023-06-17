import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5FNd3FxengzafMZTfl7HOiJgFdNObfKM",
  authDomain: "twitter-658d0.firebaseapp.com",
  projectId: "twitter-658d0",
  storageBucket: "twitter-658d0.appspot.com",
  messagingSenderId: "976138502319",
  appId: "1:976138502319:web:77ecbddd676426baf8145a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
