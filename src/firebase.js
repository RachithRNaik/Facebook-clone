import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDnjf_B5JICdtaNsAffk5Drl2ADLOYAQqM",
  authDomain: "facebook-clone-dc101.firebaseapp.com",
  projectId: "facebook-clone-dc101",
  storageBucket: "facebook-clone-dc101.appspot.com",
  messagingSenderId: "266223505735",
  appId: "1:266223505735:web:4d76f0dd3ec8b3ef6d3c62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
