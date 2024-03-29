// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWhMiLK8CKHZpZAd8finW3_0-ojyMcJr0",
  authDomain: "autoguys-901bb.firebaseapp.com",
  projectId: "autoguys-901bb",
  storageBucket: "autoguys-901bb.appspot.com",
  messagingSenderId: "711176950067",
  appId: "1:711176950067:web:16ae11db8a90770c526e46",
  measurementId: "G-YVJ2QWP3TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app