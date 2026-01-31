
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
        return true;
    } catch (e) {
        console.error("erro ao adicionar nota", e);
        return false;
    }
}
// uso exemplo: addNote("minha primeira nota", "conteudo");

// Obtendo referencias ao elemento do html

const noteForm = document.getElementById('note-form');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const messagediv = document.getElementById('message');

// Ouvinte de evento para envio do form
noteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = noteTitleInput.value;
    const content = noteContentInput.value;

    const userId = 'some_static_user_id';

    messagediv.textContent = 'Salvando nota...';
    messagediv.style.color = 'blue';

    const sucess = await addNote(title, content, userId);

    if (sucess) {
        messagediv.textContent = 'Nota salva com sucesso';
        messagediv.style.color = 'green';
        noteTitleInput.value = ''; // limpando form
        noteContentInput.value = '';
    } else {
        messagediv.textContent = 'Erro ao salvar';
        messagediv.style.color = 'red';
        noteTitleInput.value = ''; // limpando form
        noteContentInput.value = '';
    }
})
