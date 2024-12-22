const burguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

burguer.addEventListener('click', ()=> {
    menu.classList.toggle('show');
    burguer.classList.toggle('active');
})

const cards = document.querySelectorAll('.favorite .card');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0; // Índice do cartão atual

// Função para atualizar a exibição do carrossel
function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
}

// Evento do botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Avança para o próximo cartão
    updateCarousel();
});

// Evento do botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Volta para o cartão anterior
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();