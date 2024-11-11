import { initializeApp } from "firebase/app"; 
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbHn0RlcMEaHXBpk9m-9WkH83RIWC_Qmo", 
    authDomain: "yt-clone-ed9ab.firebaseapp.com",
    projectId: "yt-clone-ed9ab",
    appId: "1:438224700270:web:81a54e0b5c0fddd94d377f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}