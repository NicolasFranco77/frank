import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBKn_dWR24uU2X2AOWaAIZXBuVzXxSaN3E",
  authDomain: "next-frank.firebaseapp.com",
  projectId: "next-frank",
  storageBucket: "next-frank.appspot.com",
  messagingSenderId: "513103646393",
  appId: "1:513103646393:web:b16794424444edb2365568",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

export { auth, provider };


