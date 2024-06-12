import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAVKORhwLjOCkB_Ac9svrgVUuNSSeCA2s",
  authDomain: "tarkib-uz.firebaseapp.com",
  projectId: "tarkib-uz",
  storageBucket: "tarkib-uz.appspot.com",
  messagingSenderId: "263374754882",
  appId: "1:263374754882:web:6d441a03424af22481c9db",
  measurementId: "G-2MH9GJ0KWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
