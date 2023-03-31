// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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
const app = initializeApp(firebaseConfig);
console.log('firebase initialized success', app);
const analytics = getAnalytics(app);
