/* Criando váriaveis com os elementos html */
/* Obtendo o ID do botão para abrir modal */
/* Obtendo id da modal e closemodal */

const dialog = document.getElementById("myModal");
const openModal = document.getElementById("showModal");
const closeModal = document.getElementById("closeButton");

/* Adicionado um escutador de eventos; */

openModal.addEventListener("click", () => {
    dialog.showModal();
});

closeModal.addEventListener("click", () => {
    dialog.close();
})

/* Implementando lógica do aplicativo de notas */

/* Novamente obtendo váriaveis buscando elementos html, mas com outra função do javascript */ 
/* document.querySelector */

const noteTitle = document.querySelector('#note-title');
const noteDescription = document.querySelector('#note-description');
const notesContainer = document.querySelector('.notes-list');

/* Váriavel notes como array vazio */
/* Lógica salvando em localStorage */
let notes = JSON.parse(localStorage.getItem('notes')) || [];

/* Buscamos no localstorage o valor armazenado que contem anotações do usuario, se não houver, definimos padrão como array vazio */


/* Salvar nota */
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

/* Exibir notas salvas */
function displayNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.addEventListener('click', () => {
            editNote(index);
        });
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.description}</p>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function addNote() {
    const note = {
        title: noteTitle.value,
        description: noteDescription.value,
    };
    notes.push(note);
    saveNotes();
    displayNotes();
    noteTitle.value = '';
    noteDescription.innerHTML = '';
}

function editNote(index) {
    const note = notes[index];
    noteTitle.value = note.title;
    noteDescription.innerHTML = noteDescription;
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

/* Ouvinte de eventos ao botão salvar, chama função add note */
document.querySelector('#add-note-btn').addEventListener('click', addNote);