// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
const firebaseConfig = {
    apiKey: "AIzaSyBt-Bvtv784G2EBhTGmaVuVixj4tDUntXQ",
    authDomain: "first-project-ea91c.firebaseapp.com",
    projectId: "first-project-ea91c",
    storageBucket: "first-project-ea91c.appspot.com",
    messagingSenderId: "819792441783",
    appId: "1:819792441783:web:0ede76cf42393979e43832",
    measurementId: "G-SE2YYQHCNF"
  }
// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
