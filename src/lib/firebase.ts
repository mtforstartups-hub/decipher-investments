import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Safe fallback configuration so build succeeds on Vercel without requiring committed secrets
const fallbackConfig = {
  apiKey: "AIzaSyFakeKeyPlaceholderForDeployment",
  authDomain: "decipher-investments.firebaseapp.com",
  projectId: "decipher-investments",
  storageBucket: "decipher-investments.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
};

const app = getApps().length === 0 ? initializeApp(fallbackConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

