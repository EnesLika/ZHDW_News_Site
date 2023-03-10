// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyPrIx-UTMUa9Zk4SigPW9RH60n3ij1I",
  authDomain: "zhdwnewssite-fb452.firebaseapp.com",
  projectId: "zhdwnewssite-fb452",
  storageBucket: "zhdwnewssite-fb452.appspot.com",
  messagingSenderId: "1004368580513",
  appId: "1:1004368580513:web:d0b257db489e044851c5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };