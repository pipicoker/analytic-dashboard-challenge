import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAzVIfzdK1zOxAwQ-S3G3ymwIYvUF92ATg",
  authDomain: "analytic-dashboard-challenge.firebaseapp.com",
  projectId: "analytic-dashboard-challenge",
  storageBucket: "analytic-dashboard-challenge.appspot.com",
  messagingSenderId: "767376267441",
  appId: "1:767376267441:web:c18dcfe9576737eafaea90",
  measurementId: "G-93PP5M2NCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app);