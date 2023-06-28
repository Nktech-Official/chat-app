// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
