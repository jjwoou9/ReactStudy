import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkcqVhuDgtUaSOpokP7CSHNxigJnUJoA",
  authDomain: "react-community-f7052.firebaseapp.com",
  projectId: "react-community-f7052",
  storageBucket: "react-community-f7052.appspot.com",
  messagingSenderId: "793191841030",
  appId: "1:793191841030:web:a12495e1964d138a22f287",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
