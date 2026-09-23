import { initializeApp } from 'firebase/app';
import { getFirestore, disableNetwork } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

if (firebaseConfig.projectId === 'remixed-project-id') {
  disableNetwork(db).catch(console.error);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
