import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGW28Anu0qu3BLxM030fxsJoCnoZRXPh4",
  authDomain: "react-apps-12791.firebaseapp.com",
  projectId: "react-apps-12791",
  storageBucket: "react-apps-12791.appspot.com",
  messagingSenderId: "98820817108",
  appId: "1:98820817108:web:5d5707c713ac7bee37bb41",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
