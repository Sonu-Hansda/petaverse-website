import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjph5JPmvAJ6N-Fkpb3luRoVktZuaPD8I",
  authDomain: "petaverse-4e2b1.firebaseapp.com",
  projectId: "petaverse-4e2b1",
  storageBucket: "petaverse-4e2b1.firebasestorage.app",
  messagingSenderId: "821952974932",
  appId: "1:821952974932:web:ef6560de79eb28b548ddc1",
  measurementId: "G-TVP5230WRT"
};

const app = initializeApp(firebaseConfig);
const auth:Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};