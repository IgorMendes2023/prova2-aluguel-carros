// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZmv7j2mrW7Ca32XdPZuEX-zVJVzoVjb8",
  authDomain: "prova2-aluguel-carros-3cacf.firebaseapp.com",
  projectId: "prova2-aluguel-carros-3cacf",
  storageBucket: "prova2-aluguel-carros-3cacf.firebasestorage.app",
  messagingSenderId: "126829150233",
  appId: "1:126829150233:web:44fba6de1661a0a04f6a88"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;