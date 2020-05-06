import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_o6igNQ77fBrE3zCNfhzhgs7ZuoauFQ4",
  authDomain: "crwn-db-1cd6b.firebaseapp.com",
  databaseURL: "https://crwn-db-1cd6b.firebaseio.com",
  projectId: "crwn-db-1cd6b",
  storageBucket: "crwn-db-1cd6b.appspot.com",
  messagingSenderId: "840002479345",
  appId: "1:840002479345:web:6bec32d3dbf437732df550",
  measurementId: "G-T2K3EZ33QV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //trigger google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider); //multiple popups

export default firebase; //in case we want the whole library
