import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDInPgzwT21EF2yJCOhdgVWiB_4QS9oL78",
    authDomain: "uni-apurs.firebaseapp.com",
    projectId: "uni-apurs",
    storageBucket: "uni-apurs.appspot.com",
    messagingSenderId: "353919660330",
    appId: "1:353919660330:web:724a60ab682369fd74ae53",
    measurementId: "G-WVCV00X7PV"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }