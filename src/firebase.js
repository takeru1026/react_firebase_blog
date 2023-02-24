import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJ0X9QZnwu1EkO9ArtZiAhi-J0GGn0z_U",
  authDomain: "blog-7abc1.firebaseapp.com",
  projectId: "blog-7abc1",
  storageBucket: "blog-7abc1.appspot.com",
  messagingSenderId: "655493301919",
  appId: "1:655493301919:web:2d2ff19fed870b0d1fc4aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
