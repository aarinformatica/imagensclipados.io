// Funções da sidebar
function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    if (sidebar && main) {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    if (sidebar && main) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("initialVideo");
    const openBtn = document.querySelector('.openbtn');
    const closeBtn = document.querySelector('.closebtn');

    // Verifica se o modal e o vídeo existem antes de tentar acessá-los
    if (modal) {
        modal.style.display = "block";
    }

    if (video) {
        video.play();
    }

    if (openBtn) {
        openBtn.style.display = 'block';
        openBtn.addEventListener('click', openNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }

    // Carrossel
    let slideIndex = 0;
    let autoSlideInterval;

    function showSlides() {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block'; // Exibe o slide atual
        autoSlideInterval = setTimeout(showSlides, 3000); // Muda a cada 3 segundos
    }

    // Inicializa a apresentação de slides automaticamente
    showSlides();

    // Função para mover os slides manualmente, se necessário
    function moveSlide(direction) {
        clearTimeout(autoSlideInterval); // Para a mudança automática quando movido manualmente
        const slides = document.querySelectorAll('.carousel-item');
        slideIndex += direction;

        if (slideIndex < 1) {
            slideIndex = slides.length;
        } else if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';
        autoSlideInterval = setTimeout(showSlides, 3000); // Reinicia a mudança automática
    }

    // Atribui funções de movimento aos botões do carrossel
    document.querySelector('.carousel-button-prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.carousel-button-next').addEventListener('click', () => moveSlide(1));
});
/*comportamento sidebar*/
