import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb-h7hR60Gv8pNJu0vAJwitl2m1nGcsT4",
  authDomain: "testproject1-9c534.firebaseapp.com",
  projectId: "testproject1-9c534",
  storageBucket: "testproject1-9c534.appspot.com",
  messagingSenderId: "906544914843",
  appId: "1:906544914843:web:f10c79724f43b26187813e",
};

let firebase =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;
