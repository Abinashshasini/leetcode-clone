// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjjKOlLCCe2CHuca7ua7AVa8moCyl_R0M',
  authDomain: 'leetcode-clone-265b6.firebaseapp.com',
  projectId: 'leetcode-clone-265b6',
  storageBucket: 'leetcode-clone-265b6.appspot.com',
  messagingSenderId: '953450206885',
  appId: '1:953450206885:web:971509228ed8e50ad9df4c',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const fireStore = getFirestore(app);

export { auth, fireStore, app };
