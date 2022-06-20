import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebase = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { firebaseAuth, googleProvider };
