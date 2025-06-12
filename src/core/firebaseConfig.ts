import { initializeApp, FirebaseOptions } from "firebase/app";
import {getAuth,setPersistence,browserLocalPersistence} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
};

const app = initializeApp(firebaseConfig);

console.log("Firebase inicializado:", app.name);

const auth = getAuth(app)

const db = getFirestore(app)

const storage = getStorage(app)

const authReady = setPersistence(auth,browserLocalPersistence).then(()=>{}).catch((err)=>console.error('Error i the persistant config: ',err)
)

export {
    auth,
    db,
    storage,
    authReady
}


