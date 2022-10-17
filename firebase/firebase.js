import firebase from "firebase/app"
import "firebase/firestore"
// import "firebase/auth"
import "firebase/storage"




// Web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCus6EwkgQW3qDr55XM3iCa7oreruJ9JVQ",
  authDomain: "phished-5bcb6.firebaseapp.com",
  projectId: "phished-5bcb6",
  storageBucket: "phished-5bcb6.appspot.com",
  messagingSenderId: "967904801972",
  appId: "1:967904801972:web:e38df0c9b886e084ff53e1"
};


// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(config)
}

const firestore = firebase.firestore();
export {firestore}
