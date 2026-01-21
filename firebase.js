import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU_q-hHMgG_AGJRu2xKp2ibVmhHfeqYaI",
  authDomain: "speakupp-a54e5.firebaseapp.com",
  projectId: "speakupp-a54e5",
  storageBucket: "speakupp-a54e5.firebasestorage.app",
  messagingSenderId: "252096230279",
  appId: "1:252096230279:web:067afd5462624324a2d922"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// REGISTRO CON NOMBRE
export function registrarConNombre(nombre, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      const uid = userCred.user.uid;
      return setDoc(doc(db, "usuarios", uid), {
        nombre: nombre,
        email: email,
        creado: new Date()
      });
    });
}

// LOGIN
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
