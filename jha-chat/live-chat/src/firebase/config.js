import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDmDzhAajWEHA7Cn7PvAojtHFTEHSlBHFE",
  authDomain: "chat-project-jha.firebaseapp.com",
  projectId: "chat-project-jha",
  storageBucket: "chat-project-jha.appspot.com",
  messagingSenderId: "1062308959853",
  appId: "1:1062308959853:web:d4779de68b0559127d9164",
  measurementId: "G-96T9V84VMK"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }


/**
 * rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document=**} {
      allow read, create: if request.auth != null;
    }
  }
}
 */
