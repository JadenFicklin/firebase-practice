import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCYm3wL1UEL5wruqADxl4WbOh4Nktbx1FA",
  authDomain: "fir-jaden-f.firebaseapp.com",
  projectId: "fir-jaden-f",
  storageBucket: "fir-jaden-f.appspot.com",
  messagingSenderId: "319650234156",
  appId: "1:319650234156:web:7cd49ce9e816307f277689",
  measurementId: "G-CNPLN7XP13",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
