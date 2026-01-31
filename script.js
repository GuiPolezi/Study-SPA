
/* Começando Firebase */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";;
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy1npBGbYMDb3nfDDtS9dMRojdOU4rrr8",
  authDomain: "study-page-9c2c5.firebaseapp.com",
  projectId: "study-page-9c2c5",
  storageBucket: "study-page-9c2c5.firebasestorage.app",
  messagingSenderId: "413274786205",
  appId: "1:413274786205:web:a998e177d1568ed4320774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, doc, updateDoc, deleteDoc};

/* Função addNote */

async function  addNote(title, content, userId) {
    try {
        const docRef = await addDoc(collection(db, "notes"), {
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: userId
        });
        console.log("Nota adicionada com ID: ", docRef.id);
    } catch (e) {
        console.error("erro ao adicionar nota", e);
    }
}

// uso exemplo: addNote("minha primeira nota", "conteudo");