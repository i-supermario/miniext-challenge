// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLaTKIhSqHQv2jysgTwBvU_t8gWCXsGJE",
    authDomain: "minextensions-challenge.firebaseapp.com",
    projectId: "minextensions-challenge",
    storageBucket: "minextensions-challenge.appspot.com",
    messagingSenderId: "552403984873",
    appId: "1:552403984873:web:732e12fdc5add947032b78",
    // measurementId: "G-V1XN7PCMMF"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'minextensions-challenge.appspot.com';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
