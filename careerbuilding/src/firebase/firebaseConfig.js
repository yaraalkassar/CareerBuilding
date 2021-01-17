import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_d12TRRhe-ETuuWI3gTZLCAN__IrQ1Tw",
  authDomain: "career-building.firebaseapp.com",
  projectId: "career-building",
  storageBucket: "career-building.appspot.com",
  messagingSenderId: "663344565178",
  appId: "1:663344565178:web:f3b6c6f707d5d6c7a52b83",
  measurementId: "G-Z0EEWVVW54",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const db = firebase.firestore();
const auth = firebase.auth();

export { storage, db, auth };
