import{initializeApp} from 'firebase/app'
import{getAuth}from 'firebase/auth';

const firebaseConfig={
    apiKey: "AIzaSyA3ydaEHgSo7EIbjl5VDuVFOfub6Cm4ylQ",
  authDomain: "react-firebase-auth-2025-1270f.firebaseapp.com",
  projectId: "react-firebase-auth-2025-1270f",
  storageBucket: "react-firebase-auth-2025-1270f.firebasestorage.app",
  messagingSenderId: "150184873595",
  appId: "1:150184873595:web:a9ee3a2588dbe4acdedcde",
  measurementId: "G-68CN19WTDV"

}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


