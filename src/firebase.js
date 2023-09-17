// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5HY-w2OxBfxQMbBECsC8OAMyf0S0EewE",
  authDomain: "tiktok-clone-26c59.firebaseapp.com",
  projectId: "tiktok-clone-26c59",
  storageBucket: "tiktok-clone-26c59.appspot.com",
  messagingSenderId: "507580567739",
  appId: "1:507580567739:web:5d9064d39aacd30f4f599e",
  measurementId: "G-8D3SHWS2LJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;