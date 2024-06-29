import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAUtM_bIdzodIcL2eUgxo4v6eUZLq-8Dac",
  authDomain: "proyecto-jira-bf1d1.firebaseapp.com",
  databaseURL: "https://proyecto-jira-bf1d1-default-rtdb.firebaseio.com",
  projectId: "proyecto-jira-bf1d1",
  storageBucket: "proyecto-jira-bf1d1.appspot.com",
  messagingSenderId: "550969458057",
  appId: "1:550969458057:web:6b95234e38e9661fa9b558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();

