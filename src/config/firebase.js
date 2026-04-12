import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXxHANJwUv20os3Wr2590N67zykgGylPk",
  authDomain: "impact-horizon-africa.firebaseapp.com",
  projectId: "impact-horizon-africa",
  storageBucket: "impact-horizon-africa.firebasestorage.app",
  messagingSenderId: "549495434530",
  appId: "1:549495434530:web:c382a3a62f294c8383897b",
  measurementId: "G-97PJQBER4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
