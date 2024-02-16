import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtJdTmtttuHr1SIc_EU1Yi4d_njA2-3WY",
  authDomain: "regular-school.firebaseapp.com",
  databaseURL: "https://regular-school-default-rtdb.firebaseio.com",
  projectId: "regular-school",
  storageBucket: "regular-school.appspot.com",
  messagingSenderId: "645303834765",
  appId: "1:645303834765:web:519e709c0ba4e8492eeac4",
  measurementId: "G-V4GGJ6NGZC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
