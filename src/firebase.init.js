// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL9JBUWj9wNpCDwY01a7UqpJRDgKfd2JU",
  authDomain: "independent-service-prov-2e5d7.firebaseapp.com",
  projectId: "independent-service-prov-2e5d7",
  storageBucket: "independent-service-prov-2e5d7.appspot.com",
  messagingSenderId: "402609636909",
  appId: "1:402609636909:web:fff76e8cf1f6d3e041daa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;