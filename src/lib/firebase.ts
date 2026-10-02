import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIWtTCavTnvnI2BhPic_AbY8vGbTZTA-0",
  authDomain: "akankshafanwall.firebaseapp.com",
  projectId: "akankshafanwall",
  storageBucket: "akankshafanwall.firebasestorage.app",
  messagingSenderId: "665612145750",
  appId: "1:665612145750:web:db2d3cb3f0fff26f9957f7",
  measurementId: "G-SYEHVTM1X1"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
