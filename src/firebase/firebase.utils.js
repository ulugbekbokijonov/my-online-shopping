import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDlQyi4A4Cnn7xIvekjn4xTNjTf79G_exA",
    authDomain: "shopping-db-58a2d.firebaseapp.com",
    projectId: "shopping-db-58a2d",
    storageBucket: "shopping-db-58a2d.appspot.com",
    messagingSenderId: "283959257670",
    appId: "1:283959257670:web:f767411e4bc8508df83847",
    measurementId: "G-BG4B3MS3YW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;