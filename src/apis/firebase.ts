import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const signInGoogle = () => {
  console.log("sign in attempt");
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    console.log(user);
  });
};

export const signOut = () => {
  auth.signOut();
  window.location.reload();  
}