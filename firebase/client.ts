// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByQ9QHL89OaHgwGJUY2r4Xyj866K5s58M",
  authDomain: "intervuex-a5580.firebaseapp.com",
  projectId: "intervuex-a5580",
  storageBucket: "intervuex-a5580.firebasestorage.app",
  messagingSenderId: "427984777595",
  appId: "1:427984777595:web:d6c301ab02c79256258dde",
  measurementId: "G-27Q16VN3F9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
