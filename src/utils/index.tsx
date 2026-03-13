import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu43vq9UrrBjpMOJtLAUQ8gHveP0Keqs4",
  authDomain: "fast-campus-hotel-bookin-d6e7c.firebaseapp.com",
  databaseURL:
    "https://fast-campus-hotel-bookin-d6e7c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fast-campus-hotel-bookin-d6e7c",
  storageBucket: "fast-campus-hotel-bookin-d6e7c.firebasestorage.app",
  messagingSenderId: "999561679829",
  appId: "1:999561679829:web:78c2d35169a61f1be1a35c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
