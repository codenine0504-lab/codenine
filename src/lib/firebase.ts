
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM4JTi_Q_V7KrNlbiUFLF6iV2zab70Y1c",
  authDomain: "codenine-xz4uu.firebaseapp.com",
  projectId: "codenine-xz4uu",
  storageBucket: "codenine-xz4uu.appspot.com",
  messagingSenderId: "760912902060",
  appId: "1:760912902060:web:c6389e723508e85c7c2c09"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
