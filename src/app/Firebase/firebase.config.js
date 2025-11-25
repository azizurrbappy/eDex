// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAV4VzWf2VAWpR42lQDALdBQ0ITSIj8-y4',
  authDomain: 'edex-9813b.firebaseapp.com',
  projectId: 'edex-9813b',
  storageBucket: 'edex-9813b.firebasestorage.app',
  messagingSenderId: '937038121992',
  appId: '1:937038121992:web:a4436230345145151ed5bd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
