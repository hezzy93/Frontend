import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBZf9rfgu3N97G2XM7UfWpVJzrUYPqptaQ",

  authDomain: "chatter-capstone-6a093.firebaseapp.com",

  projectId: "chatter-capstone-6a093",

  storageBucket: "chatter-capstone-6a093.appspot.com",

  messagingSenderId: "525482384528",

  appId: "1:525482384528:web:d3238d28152537026c8c15"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
