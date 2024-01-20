// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3qM1uiZcmRvFnBeEXBZoS_4VIHAIToQc',
  authDomain: 'relink-93f37.firebaseapp.com',
  projectId: 'relink-93f37',
  storageBucket: 'relink-93f37.appspot.com',
  messagingSenderId: '290658937410',
  appId: '1:290658937410:web:891d1fadfc7bb055fc9bdb',
  measurementId: 'G-8J80X939L9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
