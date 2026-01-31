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