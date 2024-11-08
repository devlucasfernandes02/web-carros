
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCojTrVBgdqfvxCv1rGZkq_0P-B_S7HFNo",
  authDomain: "webacarros-98961.firebaseapp.com",
  projectId: "webacarros-98961",
  storageBucket: "webacarros-98961.firebasestorage.app",
  messagingSenderId: "627442474504",
  appId: "1:627442474504:web:ba8204b967b498fcf87bbd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage};