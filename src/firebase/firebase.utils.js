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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;