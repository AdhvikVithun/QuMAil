import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAA5azMGs1qfmCyQwzNPbsJzksZsFGnEb0",
    authDomain: "quaserrs-1321e.firebaseapp.com",
    projectId: "quaserrs-1321e",
    storageBucket: "quaserrs-1321e.appspot.com",
    messagingSenderId: "141898779402",
    appId: "1:141898779402:web:39c9ad2deee612c6be88f3",
    measurementId: "G-406EX7BTGD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db,auth,provider,storage }
//export { db,provider,storage }