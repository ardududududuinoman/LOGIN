import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAahvMg4Gjw_Ivxoqv1qduK_zPRydT_rPk",
  authDomain: "login-8b0a1.firebaseapp.com",
  projectId: "login-8b0a1",
  storageBucket: "login-8b0a1.appspot.com",
  messagingSenderId: "395131007520",
  appId: "1:395131007520:web:4f118554b7a854e3350245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
