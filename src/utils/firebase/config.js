import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDX3YOjeWyDjTRewJ5jWkIk--qoZOVid70",
  authDomain: "our-project-a81b8.firebaseapp.com",
  projectId: "our-project-a81b8",
  storageBucket: "our-project-a81b8.appspot.com",
  messagingSenderId: "310279443953",
  appId: "1:310279443953:web:10ab84809d3ac3d1a76050",
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
