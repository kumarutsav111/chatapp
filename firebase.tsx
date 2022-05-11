// Import the functions you need from the SDKs you need
import {initializeApp, getApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJQ0ysQll-yLu_tFLIINysO4sAmj0Dj9s',
  authDomain: 'chat-app-2fd0a.firebaseapp.com',
  projectId: 'chat-app-2fd0a',
  storageBucket: 'chat-app-2fd0a.appspot.com',
  messagingSenderId: '421772694271',
  appId: '1:421772694271:web:046d523bbc7234bb2f32ca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
