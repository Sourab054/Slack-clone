// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBp16-cuvUAG7tsefyCZDwcuuB9mBiiV7M",
  authDomain: "react-slack-clone-a0b32.firebaseapp.com",
  projectId: "react-slack-clone-a0b32",
  storageBucket: "react-slack-clone-a0b32.appspot.com",
  messagingSenderId: "441232772170",
  appId: "1:441232772170:web:f68871893a3ad3b91c2ab3",
  measurementId: "G-9VSMGN4RV8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
