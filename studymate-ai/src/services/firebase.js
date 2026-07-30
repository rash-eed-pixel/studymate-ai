import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyC75Dr8auukKtG3vbYB-yygnFNBAzDb0gU",
  authDomain: "studymate-ai-c8fd2.firebaseapp.com",
  projectId: "studymate-ai-c8fd2",
  storageBucket: "studymate-ai-c8fd2.firebasestorage.app",
  messagingSenderId: "763575571098",
  appId: "1:763575571098:web:acbfc555522624ddaf4523",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;