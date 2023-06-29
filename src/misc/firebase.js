import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQURDY2Slc5ke5oEIMwM7y2extY96lsnU',
  authDomain: 'chat-app-nktech.firebaseapp.com',
  databaseURL:
    'https://chat-app-nktech-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-app-nktech',
  storageBucket: 'chat-app-nktech.appspot.com',
  messagingSenderId: '291794369522',
  appId: '1:291794369522:web:757d4f74877eb8fd4e096b',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
