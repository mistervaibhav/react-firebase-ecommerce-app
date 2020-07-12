// REALTIME DATABASE

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

var firebaseConfig = {
  apiKey: 'AIzaSyALXjHsO4qZ_MMhTgj9_Klnl_BaBXjdQs8',
  authDomain: 'react-ecom-server.firebaseapp.com',
  databaseURL: 'https://react-ecom-server.firebaseio.com',
  projectId: 'react-ecom-server',
  storageBucket: 'react-ecom-server.appspot.com',
  messagingSenderId: '1093431363521',
  appId: '1:1093431363521:web:501c9ff983ed78e6ee9140',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
