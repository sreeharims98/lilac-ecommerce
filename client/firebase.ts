// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIC4OnAQFlcNQG2zrM_bHJ72dVPsnlnk",
  authDomain: "lilac-ecommerce.firebaseapp.com",
  projectId: "lilac-ecommerce",
  storageBucket: "lilac-ecommerce.appspot.com",
  messagingSenderId: "486974762512",
  appId: "1:486974762512:web:03d5fd85224f9641cba495",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
