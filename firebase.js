// Import the functions you need from the SDKs you need
import * as firebase from "@react-native-firebase/app";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6WeDdEaBR-YyPxdJ-johaB7N1wExhjnE",
  authDomain: "fitneeague.firebaseapp.com",
  projectId: "fitneeague",
  storageBucket: "fitneeague.appspot.com",
  messagingSenderId: "1014763850888",
  appId: "1:1014763850888:web:156f0524813d3af2efe33d",
  measurementId: "G-0LVJ8FJKB9",
  databaseURL: "https://fitneeague-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase

if (!firebase.firebase.apps.length) {
  firebase.firebase.initializeApp(firebaseConfig);
}
firebase.firebase.firestore();
export default firebase.firebase;
