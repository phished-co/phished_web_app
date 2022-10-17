import firebase from "firebase/app"
import "firebase/firestore"
import dotenv from 'dotenv'

// import "firebase/auth"




// Web app's Firebase configuration
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.enc.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(config)
}

const firestore = firebase.firestore();
export {firestore}
