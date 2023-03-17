// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import firebaseConfig from "../../firebaseconfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      saveUserIfNew(user);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      const user = res.user;
      saveUserIfNew(user);
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(error);
    });
}

export function signInWithEmail(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function saveUserIfNew(user: User) {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    });
  }
}
