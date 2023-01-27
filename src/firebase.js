import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgzhLnd5__UYJb6l8opaaChRLEZP8OxEU",
  authDomain: "note-66312.firebaseapp.com",
  projectId: "note-66312",
  storageBucket: "note-66312.appspot.com",
  messagingSenderId: "1008129370339",
  appId: "1:1008129370339:web:c8fc38c4c2999ba9d97dd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
