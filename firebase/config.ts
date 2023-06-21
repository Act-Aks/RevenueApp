import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyArWhRV_yyShiA6nMIdLgQ5dqCnNkZn384',
  authDomain: 'myrevenueapp.firebaseapp.com',
  projectId: 'myrevenueapp',
  storageBucket: 'myrevenueapp.appspot.com',
  messagingSenderId: '147751169393',
  appId: '1:147751169393:web:7cf1f0c826c8e8125a1ad0',
  measurementId: 'G-W2XQN7447T',
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// Auth Firebase
// const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Firebase Data
const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);

type SignInWithEmailAndPassword = typeof signInWithEmailAndPassword;
type CreateUserWithEmailAndPassword = typeof createUserWithEmailAndPassword;

export {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DB,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type CreateUserWithEmailAndPassword,
  type SignInWithEmailAndPassword,
};
