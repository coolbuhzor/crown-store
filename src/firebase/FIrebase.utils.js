import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
// import { signInWithGoogle } from './FIrebase.utils';

const config = {
  apiKey: 'AIzaSyDILTj9dMAY363qLmuJjNFdEdeyJ_tcdPQ',
  authDomain: 'crwn-clthing-db-a8ee6.firebaseapp.com',
  projectId: 'crwn-clthing-db-a8ee6',
  storageBucket: 'crwn-clthing-db-a8ee6.appspot.com',
  messagingSenderId: '689673060407',
  appId: '1:689673060407:web:d1ccf0ac3be9b879ac7fb2',
  measurementId: 'G-4J778LKHJT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
