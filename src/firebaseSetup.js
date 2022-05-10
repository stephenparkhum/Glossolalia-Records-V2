import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import firebaseConfig from "./firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

// Main Data here
const artistsRef = db.ref("/artists");

export { artistsRef };
