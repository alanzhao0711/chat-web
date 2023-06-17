import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAis5fw4PteJz_9j2cnjhCgtwnLZbg1R3A",
  authDomain: "chat-8d033.firebaseapp.com",
  projectId: "chat-8d033",
  storageBucket: "chat-8d033.appspot.com",
  messagingSenderId: "528475796807",
  appId: "1:528475796807:web:783a2a61b0eb29fa6fc862",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
