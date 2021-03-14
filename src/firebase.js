// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcsNuCOhdurR4JNu8vRR02QJJUme4mDKg",
  authDomain: "sep-4e18b.firebaseapp.com",
  projectId: "sep-4e18b",
  storageBucket: "sep-4e18b.appspot.com",
  messagingSenderId: "944699276005",
  appId: "1:944699276005:web:15aa42082776bb8427320c",
  measurementId: "G-QE0L4TWBQ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };