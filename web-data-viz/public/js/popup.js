const contentDiv = document.getElementById('content');

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');
const iframeContent = document.getElementById('iframeContent');


// Usa o event delegation para capturar cliques no botão "openModalBtn"
contentDiv.addEventListener('click', (event) => {
    // Verifica se o elemento clicado ou algum ancestral tem o ID "openModalBtn"
    const target = event.target.closest('#openModalBtn');
    if (target) {
        // Verifica se o sessionStorage contém o ID_USUARIO
        if (sessionStorage.getItem('ID_USUARIO')) {
            // Configura o modal e exibe
            iframeContent.src = "quiz.html"; // Página que será exibida no iframe
            modal.style.display = "block";
        } else {
            alert(`Primeiro faça o login`)
        }
    }
});

// Fecha o modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
    iframeContent.src = ""; // Limpa o iframe
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        iframeContent.src = "";
    }
});