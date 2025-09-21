console.log("Bem-vindo à Aviação Elite!");

document.querySelector('.btn')?.addEventListener('click', () => {
  alert('Redirecionando para aeronaves disponíveis...');
});

// Seleciona o container dos cards
const blogCards = document.querySelector('.blog-cards');

// Duplicar os cards para criar efeito infinito
blogCards.innerHTML += blogCards.innerHTML;

let scrollAmount = 0;

// Velocidade do movimento (quanto maior, mais rápido)
const speed = 1; 

function scrollCards() {
  scrollAmount += speed;

  if (scrollAmount >= blogCards.scrollWidth / 2) {
    // Reseta o scroll quando chegar na metade dos cards duplicados
    scrollAmount = 0;
  }

  blogCards.scrollLeft = scrollAmount;

  requestAnimationFrame(scrollCards); // loop infinito
}

// Inicia a animação
scrollCards();