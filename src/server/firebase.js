import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8I4YgVw3wpSWk8tmu9b5gab4S2D1ngvA",
  authDomain: "slackclone-1f8c8.firebaseapp.com",
  databaseURL: "https://slackclone-1f8c8-default-rtdb.firebaseio.com",
  projectId: "slackclone-1f8c8",
  storageBucket: "slackclone-1f8c8.appspot.com",
  messagingSenderId: "168255872422",
  appId: "1:168255872422:web:20112e8310075fb9d60367",
  measurementId: "G-Z4JXJMYE84"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
